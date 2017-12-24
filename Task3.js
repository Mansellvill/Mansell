function Article(){
    this.created = new Date();
    Article.count++;
    Article.last = this.created;
}

Article.count = 0;
Article.showStats = function(){
    console.log(this.count + ' Последняя: ' + this.last); 
 }

new Article();
new Article();

Article.showStats();

new Article();
new Article();

Article.showStats();