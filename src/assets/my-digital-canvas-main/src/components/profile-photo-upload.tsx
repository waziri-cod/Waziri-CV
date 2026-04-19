import { useState, useRef } from "react";
import { Upload, User, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProfilePhotoUploadProps {
  onPhotoUpload: (file: File | null) => void;
  currentPhoto: File | null;
  currentPhotoUrl?: string;
}

export function ProfilePhotoUpload({ onPhotoUpload, currentPhoto, currentPhotoUrl }: ProfilePhotoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith("image/")) {
      onPhotoUpload(file);
    } else {
      alert("Please select an image file (JPG, PNG, etc.)");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removePhoto = () => {
    onPhotoUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getPhotoUrl = () => {
    if (currentPhoto) {
      return URL.createObjectURL(currentPhoto);
    }
    return currentPhotoUrl;
  };

  return (
    <div className="space-y-4">
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
          isDragging
            ? "border-accent bg-accent/5"
            : "border-border hover:border-accent/50"
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />

        {getPhotoUrl() ? (
          <div className="space-y-3">
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gold">
              <img
                src={getPhotoUrl()}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera size={24} className="text-white" />
              </div>
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                <Upload size={16} className="mr-2" />
                Change Photo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removePhoto();
                }}
                className="text-destructive hover:text-destructive"
              >
                <X size={16} className="mr-2" />
                Remove
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold flex items-center justify-center bg-muted">
              <User size={48} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Upload Profile Photo</p>
              <p className="text-xs text-muted-foreground">
                Drag and drop your photo here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Supports JPG, PNG, and other image formats
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}