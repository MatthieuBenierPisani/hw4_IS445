function getCircleInfo() {
    const r = Number(prompt("Enter the circle radius:"));

    class Circle {
        constructor(r) {
          this.radius = r;
        }

        circumference() {
          return (2 * Math.PI * this.radius);
        }

        area() {
            return (Math.PI * (this.radius * this.radius));
          }
      }

    const circle = new Circle(r);
    
    console.log(`Its circumference is ${circle.circumference()}`);
    console.log(`Its area is ${circle.area()}`);
  }