class Food {
    
    static NAME = 'food';

    constructor() {
        this.food;
    }
  
    maker = () => {
        this.food = document.createElement('div');
        this.food.setAttribute('id', 'food');
        return this.food;
    }   

    broadCastPosition = () => {
        return { x : 547.942, y : this.getHTMLele().style.top }
    }

}