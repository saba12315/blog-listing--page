document.addEventListener('DOMContentLoaded', function() {
    // Blog data
    const blogPosts = [
        {
            id: 1,
            title: "How to Land Your First Web Development Internship",
            excerpt: "Practical tips for students looking to break into the web development industry and secure their first internship opportunity.",
            author: "ayesha ",
            date: "May 15, 2023",
            category: "web-dev",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: `<p>Landing your first web development internship can seem daunting, but with the right approach, you can stand out from the crowd. Start by building a strong portfolio with personal projects that showcase your skills in HTML, CSS, and JavaScript. Even simple projects like a todo app or a personal website can demonstrate your abilities.</p>
            <p>Networking is equally important. Attend local meetups, join online communities, and don't hesitate to reach out to professionals for informational interviews. Many internships are filled through referrals before they're even publicly posted.</p>
            <p>When applying, tailor your resume to highlight relevant coursework, projects, and any freelance work. Consider contributing to open-source projects to gain real-world experience and make your application more compelling.</p>`
        },
        {
            id: 2,
            title: "5 Essential Skills Every Tech Intern Should Master",
            excerpt: "Discover the key technical and soft skills that will help you succeed in your tech internship and beyond.",
            author: "asim shahzad",
            date: "June 2, 2023",
            category: "intern-tips",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: `<p>Technical skills are important, but successful tech interns know that soft skills are equally valuable. Communication tops the list - being able to explain technical concepts to non-technical team members is crucial. Practice writing clear emails and giving concise updates.</p>
            <p>Problem-solving is another critical skill. Instead of immediately asking for help when stuck, document what you've tried and where you're blocked. This shows initiative and helps your mentor provide better guidance.</p>
            <p>Time management, adaptability, and teamwork round out the top five. Remember that internships are learning experiences - don't be afraid to ask questions and make mistakes, as long as you learn from them.</p>`
        },
        {
            id: 3,
            title: "From Intern to Full-Time: Making the Transition",
            excerpt: "Learn how to turn your internship into a full-time job offer with these proven strategies.",
            author: "shahzaib",
            date: "June 18, 2023",
            category: "career",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
            content: `<p>Converting your internship into a full-time position requires more than just doing good work. Start by understanding the company's needs and how you can add value beyond your assigned tasks. Identify pain points in your team's workflow and propose solutions.</p>
            <p>Build relationships across departments. The more people who know your work and character, the stronger your case for hiring. Seek feedback regularly and demonstrate growth throughout your internship.</p>
            <p>About halfway through, have a conversation with your manager about full-time opportunities. Express your interest in staying on and ask what you'd need to accomplish to be considered. Then, focus on exceeding those expectations.</p>`
        },
        {
            id: 4,
            title: "React vs Vue: Which Should You Learn for Internships?",
            excerpt: "A comparison of popular JavaScript frameworks to help you decide where to focus your learning efforts.",
            author: "nimra",
            date: "July 5, 2023",
            category: "web-dev",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: `<p>Both React and Vue are excellent choices for frontend development, but they have different strengths. React, maintained by Facebook, has a larger job market and ecosystem. It's ideal if you're aiming for positions at larger tech companies or want maximum career flexibility.</p>
            <p>Vue, on the other hand, is known for its gentle learning curve and excellent documentation. It's often favored by startups and agencies for rapid prototyping. The syntax is more approachable for beginners while still being powerful.</p>
            <p>For internships, we recommend starting with React fundamentals as it's more widely requested. However, understanding Vue can make you stand out for certain positions. Ultimately, the concepts transfer between frameworks, so don't stress too much about choosing "the right one."</p>`
        },
        {
            id: 5,
            title: "Remote Internship Survival Guide",
            excerpt: "How to make the most of your remote internship experience and stay connected with your team.",
            author:"Atika",
            date: "July 12, 2023",
            category: "intern-tips",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: `<p>Remote internships offer flexibility but require extra effort to build relationships and stay visible. Start by creating a dedicated workspace that helps you maintain work-life boundaries. Invest in good lighting and audio for video calls - this makes a big difference in how you're perceived.</p>
            <p>Over-communicate your progress and challenges. Send daily or weekly updates without being asked. Schedule virtual coffee chats with team members to build rapport. Don't just talk about work - share interests and find common ground.</p>
            <p>Take initiative to participate in virtual team events, and don't be afraid to ask for virtual pair programming sessions or code reviews. These interactions can compensate for the lack of in-person collaboration.</p>`
        },
        {
            id: 6,
            title: "Building Your Personal Brand as a Developer",
            excerpt: "Why your online presence matters and how to cultivate it effectively during your internship journey.",
            author: "Alyan",
            date: "July 25, 2023",
            category: "career",
            image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: `<p>Your personal brand is what people say about you when you're not in the room. For developers, this starts with your GitHub profile - keep it active with regular commits, clear documentation, and pinned repositories that showcase your best work.</p>
            <p>Consider starting a technical blog where you share what you're learning. Even short posts about solving specific problems can demonstrate your communication skills and technical depth. Share these on LinkedIn and Twitter to increase visibility.</p>
            <p>During your internship, document your learnings (with permission) through blog posts or social media threads. This not only reinforces your own learning but shows potential employers your growth mindset and ability to reflect on experiences.</p>`
        },
        {
            id: 7,
            title: "CSS Grid vs Flexbox: When to Use Each",
            excerpt: "A practical guide to choosing the right layout technique for your web projects.",
            author: "ARHAM",
            date: "August 3, 2023",
            category: "web-dev",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
            content: `<p>CSS Grid and Flexbox are both powerful layout tools, but they serve different purposes. Flexbox is ideal for one-dimensional layouts - either a row or a column. Use it for navigation bars, centering content, or distributing items along a single axis.</p>
            <p>CSS Grid excels at two-dimensional layouts - both rows and columns simultaneously. It's perfect for overall page layouts, complex card grids, or any situation where you need precise control over both dimensions.</p>
            <p>For internship projects, master both but start with Flexbox as it has slightly better browser support for older projects. Remember they work great together - use Grid for the overall layout and Flexbox for the components within each grid area.</p>`
        },
        {
            id: 8,
            title: "How to Ask for Feedback During Your Internship",
            excerpt: "Effective strategies for getting meaningful feedback that will help you grow as a developer.",
            author: "FARIHA",
            date: "August 10, 2023",
            category: "intern-tips",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            content: `<p>Asking for feedback is an art that can accelerate your learning during an internship. Instead of generic requests like "How am I doing?", ask specific questions such as "What's one thing I could improve about my code readability?" or "How could I have handled that meeting differently?"</p>
            <p>Time your requests strategically. Ask for immediate feedback after completing a significant task or presenting work. Schedule regular check-ins with your mentor, but also seek informal feedback after smaller accomplishments.</p>
            <p>When receiving feedback, practice active listening. Don't get defensive - instead, ask clarifying questions and create an action plan. Follow up later to show you've implemented the suggestions, which demonstrates growth mindset.</p>`
        },
        {
            id: 9,
            title: "Tech Internship Interview Preparation Guide",
            excerpt: "What to expect and how to prepare for technical interviews at top tech companies.",
            author: "Raima",
            date: "August 22, 2023",
            category: "career",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: `<p>Technical interviews can be intimidating, but systematic preparation makes them manageable. Start by mastering data structures and algorithms - focus on arrays, strings, hash tables, trees, and graphs. Practice implementing them in your preferred language without relying on built-in methods.</p>
            <p>Use platforms like LeetCode, but prioritize understanding patterns over memorizing solutions. For each problem, practice explaining your thought process out loud, as communication is often evaluated alongside technical skills.</p>
            <p>Don't neglect system design and behavioral interviews. For system design, study how real-world applications are structured. For behavioral questions, prepare STAR (Situation, Task, Action, Result) stories that highlight your problem-solving and teamwork abilities.</p>`
        }
    ];

    // DOM elements
    const blogGrid = document.querySelector('.blog-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const scrollTopBtn = document.querySelector('.scroll-top');
    const modal = document.getElementById('blogModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i>🌓</i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    document.body.appendChild(themeToggle);

    // Display all blog posts initially
    displayBlogPosts(blogPosts);

    // Filter blog posts by category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            if (category === 'all') {
                displayBlogPosts(blogPosts);
            } else {
                const filteredPosts = blogPosts.filter(post => post.category === category);
                displayBlogPosts(filteredPosts);
            }
        });
    });

    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dark/light mode toggle
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', document.body.dataset.theme);
    });

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.dataset.theme = 'dark';
    }

    // Function to display blog posts
    function displayBlogPosts(posts) {
        blogGrid.innerHTML = '';
        
        posts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.dataset.category = post.category;
            
            blogCard.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="blog-image">
                <div class="blog-content">
                    <span class="blog-category">${formatCategory(post.category)}</span>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-meta">
                        <span>${post.author}</span>
                        <span>${post.date}</span>
                    </div>
                    <a href="#" class="read-more" data-id="${post.id}">Read More</a>
                </div>
            `;
            
            blogGrid.appendChild(blogCard);
        });

        // Add event listeners to read more buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = parseInt(button.dataset.id);
                const post = blogPosts.find(p => p.id === postId);
                openModal(post);
            });
        });
    }

    // Format category for display
    function formatCategory(category) {
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    // Open modal with full blog content
    function openModal(post) {
        document.querySelector('.modal-image').src = post.image;
        document.querySelector('.modal-image').alt = post.title;
        document.querySelector('.modal-title').textContent = post.title;
        document.querySelector('.modal-author').textContent = `By ${post.author}`;
        document.querySelector('.modal-date').textContent = post.date;
        document.querySelector('.modal-category').textContent = formatCategory(post.category);
        document.querySelector('.modal-body').innerHTML = post.content;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});