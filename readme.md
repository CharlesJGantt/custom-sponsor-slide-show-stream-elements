# Custom Sponsor Slideshow Widget for StreamElements

![License](https://img.shields.io/github/license/CharlesJGantt/custom-sponsor-slide-show-stream-elements)
![Version](https://img.shields.io/github/v/release/CharlesJGantt/custom-sponsor-slide-show-stream-elements)
![Stars](https://img.shields.io/github/stars/CharlesJGantt/custom-sponsor-slide-show-stream-elements)

A lightweight StreamElements custom widget that displays rotating sponsor, donation, and support banners inside OBS Studio.

The widget cycles through three images, displays each image for a configurable duration, then hides completely before repeating.

Built for StreamElements overlays and OBS Studio.

[![Preview](preview.png)](preview.png)

## Features

* Displays up to three rotating banner images
* Configurable display duration for each image
* Configurable hidden duration between slideshow cycles
* Configurable fade transition timing
* Uses direct image URLs
* No asset uploads required
* Fully customizable through StreamElements widget fields
* Designed for OBS Studio and StreamElements overlays
* Lightweight HTML, CSS, and JavaScript implementation

---

## How It Works

The widget follows this cycle:

```text
Image 1 → Display
Image 2 → Display
Image 3 → Display
Hidden → Wait
Repeat
```

Default timing:

```text
Image 1: 5 seconds
Image 2: 5 seconds
Image 3: 5 seconds
Hidden: 180 seconds (3 minutes)
```

Total cycle time:

```text
15 seconds visible
180 seconds hidden

195 seconds total
```

---

## Default Images

### Ko-fi Banner

```text
https://github.com/CharlesJGantt/custom-sponsor-slide-show-stream-elements/blob/main/assets/andy-ko-fi.png?raw=true
```

### Patreon Banner

```text
https://github.com/CharlesJGantt/custom-sponsor-slide-show-stream-elements/blob/main/assets/andy-patreonfi.png?raw=true
```

### Donate Banner

```text
https://github.com/CharlesJGantt/custom-sponsor-slide-show-stream-elements/blob/main/assets/andydonate.png?raw=true
```

> [!TIP]
> You can replace any image with your own banner by updating the corresponding widget field.

---

## Requirements

* StreamElements account
* OBS Studio
* StreamElements overlay

---

## Installation

### 1. Create or Edit a StreamElements Overlay

1. Open the StreamElements Dashboard.
2. Navigate to **Streaming Tools → Overlays**.
3. Create a new overlay or edit an existing overlay.
4. Set the overlay resolution to:

```text
1920 × 1080
```

5. Click:

```text
Add Widget → Static / Custom → Custom Widget
```

---

### 2. Copy Widget Files

Replace the contents of each StreamElements tab with the corresponding repository file.

| StreamElements Tab | Repository File |
| ------------------ | --------------- |
| HTML               | `html.html`     |
| CSS                | `css.css`       |
| JavaScript         | `js.js`         |
| Fields             | `fields.json`   |
| Data               | `data.json`     |

Save the widget.

---

### 3. Configure Widget Settings

After saving, open the widget settings panel.

Default values:

```text
Image 1 URL: Ko-fi Banner
Image 2 URL: Patreon Banner
Image 3 URL: Donate Banner

Display Time: 5 seconds
Hidden Time: 180 seconds
Fade Time: 500 milliseconds
```

---

### 4. Add the Overlay to OBS

1. Copy the StreamElements overlay URL.
2. In OBS Studio, add a new **Browser Source**.
3. Paste the overlay URL.

Recommended Browser Source settings:

```text
Width: 800
Height: 200
FPS: 60
```

Enable:

* Refresh browser when scene becomes active

Disable:

* Shutdown source when not visible

If changes do not appear immediately:

1. Right-click the Browser Source.
2. Select **Refresh Cache**.

---

## Configuration

All settings are configurable through the StreamElements widget fields.

| Setting                | Description                                | Default        |
| ---------------------- | ------------------------------------------ | -------------- |
| `imageOneUrl`          | First banner image URL                     | Ko-fi Banner   |
| `imageTwoUrl`          | Second banner image URL                    | Patreon Banner |
| `imageThreeUrl`        | Third banner image URL                     | Donate Banner  |
| `displayTimeSeconds`   | Time each image is displayed               | `5`            |
| `hiddenTimeSeconds`    | Time widget remains hidden after slideshow | `180`          |
| `fadeTimeMilliseconds` | Fade transition duration                   | `500`          |

---

## Image Requirements

Image URLs must point directly to image files.

Standard GitHub URLs will not work:

```text
❌ https://github.com/.../blob/main/image.png
```

Use one of these formats instead:

```text
✅ https://github.com/.../blob/main/image.png?raw=true
```

or:

```text
✅ https://raw.githubusercontent.com/.../main/image.png
```

---

## Customization

### Change Display Duration

Update:

```text
Display Time Per Image (Seconds)
```

Examples:

```text
3
5
10
```

---

### Change Hidden Duration

Update:

```text
Hidden Time After Slideshow (Seconds)
```

Examples:

```text
60
180
300
```

---

### Change Fade Speed

Update:

```text
Fade Time (Milliseconds)
```

Examples:

```text
250
500
1000
```

---

### Replace Banner Images

Update:

```text
Image 1 URL
Image 2 URL
Image 3 URL
```

with direct image URLs.

---

## Troubleshooting

### Images Do Not Appear

Verify:

* The image URLs point directly to image files.
* The widget has been saved.
* The Browser Source cache has been refreshed.

---

### Images Look Blurry

Verify:

* The source images are high resolution.
* The Browser Source dimensions match the banner dimensions.
* OBS scaling is set appropriately.

---

### Timing Is Incorrect

Verify:

* Display time is configured in seconds.
* Hidden time is configured in seconds.
* Fade time is configured in milliseconds.

---

### Changes Do Not Update

Refresh the Browser Source cache:

1. Right-click the Browser Source.
2. Select **Refresh Cache**.

---

### JSON Errors

The **Fields** and **Data** tabs require valid JSON.

The default Data tab should contain:

```json
{}
```

---

## License

This project is licensed under the MIT License.

See `LICENSE` for details.

---

## Developed by Charles J. Gantt for Andy The Maker

This widget was originally developed for the **Andy The Maker** streaming ecosystem.

### Follow Andy The Maker

* 🌐 https://www.AndyTheMakerMC.xyz
* 🎮 https://www.twitch.tv/AndyTheMakerMC
* ▶️ https://www.youtube.com/@AndyTheMakerMC
* 📸 https://www.instagram.com/AndyTheMakerMC
* 🎵 https://www.tiktok.com/@AndyTheMakerMC
* 🐦 https://x.com/AndyTheMakerMC
* 👥 https://www.facebook.com/AndyTheMakerMC

### Support the Channel

* ❤️ Patreon: https://www.patreon.com/AndyTheMakerMC
* ☕ Ko-fi: https://ko-fi.com/AndyTheMakerMC
* 💰 Tip: https://streamelements.com/andythemakermc/tip

Thank you for supporting future widgets, overlays, live streams, and Minecraft content.
