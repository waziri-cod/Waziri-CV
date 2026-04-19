import { useState, useRef } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CVUploadProps {
  onCVUpload: (file: File | null) => void;
  currentCV: File | null;
}

export function CVUpload({ onCVUpload, currentCV }: CVUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type === "application/pdf") {
      onCVUpload(file);
    } else {
      alert("Please select a PDF file");
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

  const removeCV = () => {
    onCVUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
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
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileInput}
          className="hidden"
        />

        {currentCV ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
              <FileText size={24} />
              <span className="font-medium">{currentCV.name}</span>
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={16} className="mr-2" />
                Replace CV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={removeCV}
                className="text-destructive hover:text-destructive"
              >
                <X size={16} className="mr-2" />
                Remove
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <Upload size={32} className="mx-auto text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Upload your CV</p>
              <p className="text-xs text-muted-foreground">
                Drag and drop your PDF file here, or click to browse
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
            >
              Choose File
            </Button>
          </div>
        )}
      </div>

      {currentCV && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <a
            href={URL.createObjectURL(currentCV)}
            download={currentCV.name}
            className="inline-flex items-center gap-2 px-6 py-2 gold-gradient text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm"
          >
            <FileText size={16} />
            Download CV
          </a>
        </motion.div>
      )}
    </div>
  );
}