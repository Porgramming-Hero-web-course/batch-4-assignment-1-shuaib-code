{
    type Circle = {
        shape: "circle",
        radius: number
    }

    type Rectangle = {
        shape: "rectangle",
        width: number,
        height: number
    }

    type Shape = Circle | Rectangle

    const calculateShapeArea = (shape: Shape): number => {
        if (shape.shape === "circle") return parseFloat((Math.PI * shape.radius ** 2).toFixed(2))
        if (shape.shape === "rectangle") return shape.width * shape.height
        return 0
    }

    // Sample Input 1:
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    console.log(circleArea);   // Output 1: 78.54;

    
    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    });

    console.log(rectangleArea);  // Output 2: 24;
}