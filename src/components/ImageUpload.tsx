import { useState, useRef } from 'react';
import { Upload, Camera, X, Frame } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  disabled?: boolean;
}

export default function ImageUpload({ onImageSelect, disabled }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const clearPreview = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  if (preview) {
    return (
      <div className="relative brass-frame rounded-xl">
        <div className="relative bg-mahogany-900 rounded-lg p-2">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-96 object-contain rounded-lg"
          />
          <button
            onClick={clearPreview}
            disabled={disabled}
            className="absolute top-4 right-4 brass-frame rounded-full hover:scale-110 transition-transform disabled:opacity-50"
          >
            <div className="bg-red-800 hover:bg-red-700 text-brass-100 p-2.5 rounded-full transition-colors">
              <X size={20} />
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative brass-frame rounded-xl transition-all ${
        dragActive ? 'scale-[1.02]' : ''
      }`}
    >
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
          dragActive
            ? 'border-gold-400 bg-gold-500/10'
            : 'border-brass-700 bg-mahogany-900/50 hover:border-brass-600'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
          disabled={disabled}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleChange}
          className="hidden"
          disabled={disabled}
        />

        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brass-500/20 rounded-full blur-xl"></div>
              <Frame className="text-brass-500 relative z-10" size={64} strokeWidth={1.5} />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-gold-400 mb-2">
              Present Your Evidence
            </h3>
            <p className="text-brass-400 text-sm">
              Place your image within the frame, or summon it through the portals below
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              disabled={disabled}
              className="brass-frame rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              <div className="bg-mahogany-gradient hover:brightness-110 transition-all px-6 py-3 rounded-sm">
                <div className="flex items-center justify-center gap-2 text-brass-200">
                  <Camera size={20} />
                  <span className="font-serif font-medium">Capture Moment</span>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled}
              className="brass-frame rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              <div className="bg-brass-gradient hover:brightness-110 transition-all px-6 py-3 rounded-sm shadow-brass-outer">
                <div className="flex items-center justify-center gap-2 text-mahogany-900">
                  <Upload size={20} />
                  <span className="font-serif font-medium">Select Scroll</span>
                </div>
              </div>
            </button>
          </div>

          <p className="text-xs text-brass-600 italic font-serif">
            Accepted inscriptions: JPG, PNG, WEBP
          </p>
        </div>
      </div>
    </div>
  );
}
