// Truncate content to a certain length and add 'Read More' functionality
const truncateContent = (content, maxLength = 100) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + '...';
};

// Populate professor data dynamically
document.getElementById('professor-name').textContent = professor.name;
document.getElementById('professor-bio').textContent = professor.bio;

const blogPostsContainer = document.getElementById('blog-posts');

// Generate blog posts dynamically with 'Read More' feature
professor.blogPosts.forEach(({ title, date, image, content }) => {
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
    const truncatedContent = truncateContent(content, 150); // Truncate to 150 characters
    postContent.innerHTML = truncatedContent;

    const readMoreLink = document.createElement('a');
    readMoreLink.href = "#";
    readMoreLink.textContent = "Read More";
    readMoreLink.classList.add('read-more-link');

    let isExpanded = false;

    // Toggle between truncated content and full content
    readMoreLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (isExpanded) {
            postContent.innerHTML = truncateContent(content, 150);
            readMoreLink.textContent = "Read More";
        } else {
            postContent.innerHTML = content;
            readMoreLink.textContent = "Read Less";
        }
        isExpanded = !isExpanded;
    });

    // Append elements to postContentWrapper
    postContentWrapper.appendChild(postTitle);
    postContentWrapper.appendChild(postDate);
    postContentWrapper.appendChild(postContent);
    postContentWrapper.appendChild(readMoreLink);

    // Append image and content wrapper to the post element
    postElement.appendChild(postImage);
    postElement.appendChild(postContentWrapper);

    // Add post element to the container
    blogPostsContainer.appendChild(postElement);
});
