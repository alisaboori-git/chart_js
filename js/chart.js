class chart {
    constructor(type, json_txt, element_ID, height, width, scrollable) {
        this.type = type;
        this.data = JSON.parse(json_txt);
        this.chart_height = height;
        this.chart_width = width;
        this.chart_container = document.createElement('div');
        this.chart_container.style.cssText = `width: 1000px; height: 800px; display:flex; align-items: flex-end;`
        this.max_num = this.max_finder(this.data)

        document.getElementById(element_ID).appendChild(this.chart_container)
        if (typeof (scrollable) == "boolean") {
            this.scrollable = scrollable;
        }
        else {
            // this.scrollable = false;
        }
        switch (type) {
            case 'bar_chart':
                this.bar_chart(this.data)
                break;

            default:
                console.error('this type is not valid')
                break;
        }
    }
    bar_chart(data) {
        var max_10 = Math.pow(10, this.max_num.toString().length - 1)
        var round_max = this.max_num + max_10 - (this.max_num % max_10)
        for (var key in data) {
            var random = Math.random() * 360
            var style = `background-color: hsl(${random}, 100%, 75%); width: 10%; max-width: 130px; height: ${(data[key] / round_max) * 100}%; border: 3px solid hsl(${random}, 100%, 60%); margin: 0 1em;`
            var bar = document.createElement('div')
            bar.style.cssText = style;
            this.chart_container.appendChild(bar)
        }
    }
    max_finder(data) {
        var max = 0
        for (var key in data) {
            if (data[key] > max) {
                max = data[key]
            }
            else { }
        }
        return max
    }
}
