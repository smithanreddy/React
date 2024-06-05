import React from 'react';
import './App.css';

const blogPosts = [
    {
        title: 'PLANTS HUB',
        image: 'https://stacyling.com/wp-content/uploads/2023/01/snake-plants.jpg',
        description: 'Snake is good indoor plant for oxygen',
        body: 'Snake plant medicinal benefits include removing indoor air pollutants (such as formaldehyde and benzene) and helping to filter out impurities such as xylene, trichloroethylene, toluene, and ammonia. The snake plant can remove up to 87% of these harmful toxins at night. It can also reduce the level of nitrate ions. ',
    },
    {
        title: 'Title of Another Post',
        image: 'https://www.bhg.com/thmb/IBXSee-W-ApYea0pHNLrooFttbE=/1244x0/filters:no_upscale():strip_icc()/mauna-loa-lily-01b6b406-cc38fa57748d43449f904c87d5902713.jpg',
        description: 'Beautiful indoor plant to enhance home decor',
        body: 'Peace lilies are hugely popular houseplants—in part because they are so easy to grow. They feature glossy, emerald-green leaves that grow in very low light. In fact, the peace lily’s ability to grow in offices and light-deprived homes has earned it the nickname “the closet plant”. However, when placed in bright, indirect light, peace lilies can produce elegant white flowers (a.k.a., spathes) almost year-round.',
    },
    // Add more blog posts as needed
];

function App() {
    return (
        <div className="App">
            <TopBar />
            <BlogPosts posts={blogPosts} />
        </div>
    );
}

function TopBar() {
    return (
        <div className="top-bar">
            <div className="logo">Plant Nursery</div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Plants</a>
                <a href="#">Ideas</a>
            </div>
        </div>
    );
}

function BlogPosts({ posts }) {
    return (
        <div className="blog-posts">
            {posts.map((post, index) => (
                <BlogPost key={index} post={post} />
            ))}
        </div>
    );
}

function BlogPost({ post }) {
    return (
        <div className="blog-post">
          
            <h2>{post.title}</h2>
            <img src={post.image} alt="Plant Image" className="blog-post"/>
            <p>{post.description}</p>
            <p>{post.body}</p>
            <hr />
        </div>
        
    );
}

export default App;
