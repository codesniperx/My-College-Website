// script.js
const professor = {
    name: "Dr. John Doe",
    bio: "Dr. John Doe is a Professor of Computer Science with over 20 years of teaching and research experience. His research focuses on artificial intelligence, machine learning, and data science. He’s published extensively and is highly regarded for his innovative approach to teaching.",
    blogPosts: [
        {
            title: "The Future of AI in Education",
            date: "October 1, 2024",
            image: "ai-education.jpg", // Image associated with the post
            content: "In this blog, I explore how AI will transform personalized learning, making education more accessible and tailored to individual students' needs. The potential impact of AI is vast, from automating administrative tasks to enhancing teaching methodologies."
        },
        {
            title: "Machine Learning Explained",
            date: "September 20, 2024",
            image: "machine-learning.jpg", // Image associated with the post
            content: "A guide to understanding machine learning's core concepts. This blog covers the types of machine learning, key algorithms, and real-world applications that demonstrate its power across industries, from healthcare to finance."
        },
        {
            title: "Research Tips for Graduate Students",
            date: "August 30, 2024",
            image: "research-tips.jpg", // Image associated with the post
            content: "Navigating graduate research can be challenging. In this post, I offer practical advice on how to structure your research, write compelling papers, and manage time effectively to achieve your academic goals."
        }
    ]
};

// Populate professor data dynamically
document.getElementById('professor-name').textContent = professor.name;
document.getElementById('professor-bio').textContent = professor.bio;

const blogPostsContainer = document.getElementById('blog-posts');

// Generate blog posts dynamically
professor.blogPosts.forEach(({ title, date, image, content }) => {
    // Create elements for each blog post
    const postElement = document.createElement('article');
    postElement.classList.add('blog-post');

    const postImage = document.createElement('img');
    postImage.src = `images/${image}`;
    postImage.alt = title;
    postImage.classList.add('post-image');

    const postContentWrapper = document.createElement('div');
    postContentWrapper.classList.add('post-content-wrapper');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postDate = document.createElement('time');
    postDate.textContent = date;
    postDate.classList.add('post-date');

    const postContent = document.createElement('p');
    postContent.textContent = content;

    // Append elements to postContentWrapper
    postContentWrapper.appendChild(postTitle);
    postContentWrapper.appendChild(postDate);
    postContentWrapper.appendChild(postContent);

    // Append image and content wrapper to the post element
    postElement.appendChild(postImage);
    postElement.appendChild(postContentWrapper);

    // Add post element to the container
    blogPostsContainer.appendChild(postElement);
});
