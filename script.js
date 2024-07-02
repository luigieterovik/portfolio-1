function openPopup(src) {
    // window dimentions
    let width = screen.width;
    let height = screen.height;

    // center the window in the screen
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;

    // open a new window
    let newWindow = window.open("", "popup", "width=" + width + ",height=" + top + ",top=" + top + ",left=" + left);
    
    // add the image to the new window
    newWindow.document.write('<html><head><title>Imagem</title></head><body style="margin:0;"><img src="' + src + '" style="width:100%;height:100%;object-fit:contain;"></body></html>');
}