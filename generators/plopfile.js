module.exports = (plop) => {
    plop.setGenerator('blog post', {
      prompts: [
        {
          type: 'input',
          name: 'title',
          message: 'Blog post title?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'describe this post:'
        }
      ],
      actions: data => {
        // Get current date
        data.date = new Date().toISOString().split('T')[0];
  
        return [
          {
            type: 'add',
            path: '../posts/{{date}}--{{title}}.md',
            templateFile: 'post.md.template'
          }
        ];
      }
    });
  };