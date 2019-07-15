        class Post {
            constructor(title,img) {
            this.title = title;
            this.img = img;
            }
        }
    
    const app = new Vue ({
        el: '#app',
        data: {
                placeholder:'Enter your search terms',
                search: '',
                postList : [
                            new Post(
                                'What you Need To Know About CSS Variables',
                                '1.jpg'        
                            ),
                            new Post(
                                'Freeble:4 Great Looking Pricing Tables',
                                '2.jpg'
                            ),
                            new Post(  
                                '20 Interesting JavaScript and CSS Libraries for February 2016',
                                '3.png'
                            ),
                            new Post(
                                'Quick Tip:The Easiest Way To Make Responsive Headers', 
                                '4.png'
                            ),
                            new Post( 
                                'Learn SQL In 20 Minutes',
                                '5.png'
                            )
                        ]
        },
        computed: {
                filteredList() 
                {
                    return this.postList.filter(post => {
                        return post.title.toLowerCase().includes(this.search.toLowerCase())
                    })
                }
        }
    })