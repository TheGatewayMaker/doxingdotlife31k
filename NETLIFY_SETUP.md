# Netlify R2 Storage Setup Guide

This guide explains how to configure Cloudflare R2 storage for your Doxing Dot Life application on Netlify.

## Required Environment Variables

You need to set the following environment variables in your Netlify deployment:

### 1. R2 Credentials

- **R2_ACCESS_KEY_ID**: Your Cloudflare R2 access key ID
- **R2_SECRET_ACCESS_KEY**: Your Cloudflare R2 secret access key
- **R2_ACCOUNT_ID**: Your Cloudflare Account ID

### 2. R2 Bucket Configuration

- **R2_BUCKET_NAME**: The name of your R2 bucket (e.g., `doxing-dot-life`)
- **R2_PUBLIC_URL**: (Optional) The public URL for accessing files. If set, media files will be served through this URL. Otherwise, a default URL is constructed from your account ID and bucket name.

## How to Get Your R2 Credentials

1. **Login to Cloudflare Dashboard**: https://dash.cloudflare.com
2. **Navigate to R2**: Click "R2" in the left sidebar
3. **Create a Bucket** (if not already created):
   - Click "Create bucket"
   - Enter your bucket name (e.g., `doxing-dot-life`)
   - Leave other settings as default
   - Click "Create bucket"
4. **Get Your Account ID**:
   - In the R2 section, you'll see your Account ID displayed at the top
   - Copy and save this ID
5. **Create API Token**:
   - Click "Manage R2 API Tokens" in the R2 overview
   - Click "Create API token"
   - Set the following permissions:
     - **Bucket Operations**: List buckets, Create bucket, Delete bucket
     - **Object Operations**: List objects, Read objects, Write objects, Delete objects
   - Set the appropriate TTL (Time to Live) for the token
   - Click "Create API token"
   - Copy the **Access Key ID** and **Secret Access Key**
6. **(Optional) Set Public Access**:
   - Go to your bucket settings
   - In the "Public access" section, you can enable public read access
   - Copy the public URL if you want to serve files through a custom domain

## Setting Environment Variables in Netlify

1. **Login to Netlify**: https://app.netlify.com
2. **Select Your Site**: Choose the site for Doxing Dot Life
3. **Go to Settings**: Click "Site settings"
4. **Navigate to Build & deploy**: Click "Build & deploy" > "Environment"
5. **Add Environment Variables**:
   - Click "Edit variables"
   - Add each variable from the required list above
   - Make sure to add them in the exact format shown
6. **Redeploy**: After adding variables, trigger a new deploy for the changes to take effect

## Variable Format

```
R2_ACCESS_KEY_ID: your_access_key_id
R2_SECRET_ACCESS_KEY: your_secret_access_key
R2_ACCOUNT_ID: your_account_id
R2_BUCKET_NAME: your-bucket-name
R2_PUBLIC_URL: https://your-public-url.com (optional)
```

## Testing Your Configuration

After deploying with the environment variables:

1. Visit your site
2. Create a new post with media files
3. The media should upload to R2 and display on the site
4. Check the Network tab in browser DevTools to see if media files are loading correctly
5. If media doesn't appear, check the server logs for R2 connection errors

## Troubleshooting

### "Missing required R2 environment variables"

- Verify all required variables are set in Netlify
- Make sure the variable names match exactly (case-sensitive)
- Redeploy your site after adding variables

### "Media files not loading"

- Check if the R2_PUBLIC_URL is correct
- Verify the bucket has public read access enabled
- Check the R2 bucket policy allows reading objects

### "Upload fails with permission error"

- Verify the API token has Write and Delete permissions
- Check that the bucket exists and is accessible
- Ensure the R2_ACCOUNT_ID is correct

## Media File Support

The application now supports all common media types:

### Images

- JPEG, PNG, WebP, GIF, SVG, BMP, TIFF, ICO

### Videos

- MP4, WebM, MOV, AVI, MKV, FLV, M4V, MPEG, WMV, OGV

### Audio

- MP3, WAV, M4A, AAC, FLAC, OGG, OPUS, WMA, AIFF

### Features

- **Image Lightbox**: Click on images to view them in fullscreen
- **Video Fullscreen**: Click the fullscreen button to watch videos in full resolution
- **Media Gallery**: Thumbnail grid to navigate through all media files
- **Download**: Download any media file directly
- **Navigation**: Use arrow keys or buttons to navigate between media files
