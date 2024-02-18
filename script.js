// triangle
function calculateArea(){
    // base
    const triangleBaseInput=document.getElementById('triangle-base')
    const triangleBaseText=triangleBaseInput.value
    const base=parseFloat(triangleBaseText) 
    // console.log(base)
    // height
    const triangleHeightInput=document.getElementById('triangle-height')
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText)
    // console.log(height)
    // area
    const area=0.5*base*height
    console.log('area multepi number',area)
    const triangleArea=document.getElementById('triangle-area')
    triangleArea.innerText=area;
}
// rectangle
function calculateRectangle(){
    const rectangleWidthInput=document.getElementById('rectangle-width')
    const rectangleWidthText=rectangleWidthInput.value
    const width=parseFloat(rectangleWidthText)
    
    const rectangleLenghtInput=document.getElementById('rectangle-lenght')
    const rectangleLenghtText=rectangleLenghtInput.value
    const lenght=parseFloat(rectangleLenghtText)
    
    const area=width*lenght
    console.log('multipli',area)
     const rectangleArea=document.getElementById('rectangle-area')
     rectangleArea.innerText=area;

}
// parallelogram
function calculateParallelogram(){
    const parallelogramBaseInput=document.getElementById('parallelogram-base')
    const parallelogramBaseText=parallelogramBaseInput.value
    const base=parseFloat(parallelogramBaseText)
    
    const parallelogramHeightInput=document.getElementById('parallelogram-height')
    const parallelogramHeightText=parallelogramHeightInput.value
    const height=parseFloat(parallelogramHeightText)
    
    const area=base*height
    console.log('multipli',area)
     const parallelogramArea=document.getElementById('parallelogram-area')
     parallelogramArea.innerText=area;

}

// rhombus
function calculateRhombus(){
    
}
