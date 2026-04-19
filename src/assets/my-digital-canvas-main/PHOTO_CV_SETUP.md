// Profile photo URL in public/ folder, centered in hero section
const profilePhotoUrl = "/your-profile-photo.jpg";

...

<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, type: "spring" }}
  className="flex justify-center mb-8"
>
  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold overflow-hidden mx-auto">
    <img
      src={profilePhotoUrl}
      alt="Waziri Shaban - Profile Photo"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>// Profile photo URL in public/ folder, centered in hero section
const profilePhotoUrl = "/your-profile-photo.jpg";

...

<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, type: "spring" }}
  className="flex justify-center mb-8"
>
  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold overflow-hidden mx-auto">
    <img
      src={profilePhotoUrl}
      alt="Waziri Shaban - Profile Photo"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>// Profile photo URL in public/ folder, centered in hero section
const profilePhotoUrl = "/your-profile-photo.jpg";

...

<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, type: "spring" }}
  className="flex justify-center mb-8"
>
  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold overflow-hidden mx-auto">
    <img
      src={profilePhotoUrl}
      alt="Waziri Shaban - Profile Photo"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div># How to Add Your Profile Photo and CV

## 📸 Adding Your Profile Photo

### Step 1: Place your photo file
Put your profile photo in the `public/` folder:
```
public/
├── waziri-profile.jpg  ← Add your photo here (rename to your preferred name)
├── favicon.ico
├── placeholder.svg
└── robots.txt
```

### Step 2: Update the reference in HeroSection.tsx
In `src/components/HeroSection.tsx`, change this line:
```typescript
const profilePhotoUrl = "/your-profile-photo.jpg";
```
To reference your actual file name:
```typescript
const profilePhotoUrl = "/waziri-profile.jpg";
```

## 📄 Adding Your CV

### Step 1: Place your CV file
Put your CV PDF in the `public/` folder:
```
public/
├── waziri-cv.pdf  ← Add your CV here (rename to your preferred name)
├── waziri-profile.jpg
├── favicon.ico
├── placeholder.svg
└── robots.txt
```

### Step 2: Update the CV reference in CVSection.tsx
In `src/components/CVSection.tsx`, change this line:
```typescript
const cvFileUrl = "/your-cv.pdf";
```
To reference your actual file name:
```typescript
const cvFileUrl = "/waziri-cv.pdf";
```

## ✅ File Naming Tips
- Use lowercase letters
- Replace spaces with hyphens: `waziri-shaban-cv.pdf`
- Keep file names simple and descriptive
- Supported formats: JPG, PNG, GIF for photos; PDF for CV

## 🚀 After Adding Files
1. Save the files in the `public/` folder
2. Update the file path references in the code above
3. The development server will automatically reload
4. Your photo and CV will be available for download!

## 📁 Current Code References

**HeroSection.tsx** (lines 4-5):
```typescript
import heroBg from "@/assets/hero-bg.jpg";
const profilePhotoUrl = "/your-profile-photo.jpg";  // ← Change this
```

**CVSection.tsx** (line 5):
```typescript
const cvFileUrl = "/your-cv.pdf";  // ← Change this
```