const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
if (context) {
    // Assuming an image is already drawn on the canvas
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    
    // Create an opacity filter with a factor of 0.5 (50% opacity)
    const opacityFilter = createOpacityFilter(0.5);
    
    // Apply the filter to the image data
    const filteredData = opacityFilter(imageData);
    
    // Put the modified image data back onto the canvas
    context.putImageData(filteredData, 0, 0);
}
