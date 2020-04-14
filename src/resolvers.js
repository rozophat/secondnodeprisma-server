module.exports = {
    Query: {
      book(root, args, context) {
        const { id } = args;
        return context.prisma.book1({ id });
      },
      books(root, args, context) {
        return context.prisma.book1s({});
      },
      author(root, args, context) {
        const { id } = args;
        return context.prisma.author({ id });
      },
      authors(root, args, context) {
        return context.prisma.authors({});
      }
    },
    Mutation: {
      addAuthor(root, args, context) {
        const { name, age } = args;
        return context.prisma.createAuthor({ name, age });
      },
      updateAuthor(root, args, context) {
        const { id, name, age } = args;
        return context.prisma.updateAuthor({
          where: { id },
          data: { name, age }
        });
      },
      addBook(root, args, context) {
        const { authorId, name, genre } = args;
        return context.prisma.createBook1({
          name,
          genre,
          author: { connect: { id: authorId } }
        });
  
        // return context.prisma.updatePost({
        //   where: { id: args.postId },
        //   data: { published: true },
        // });
      },
      removeBook(root, args, context) {
        const { id } = args;
        return context.prisma.deleteBook1({ id });
      }
    },
    Author: {
      books(root, args, context) {
        const { id } = root;
        return context.prisma.author({ id }).book1s();
      }
    },
    Book: {
      author(root, args, context) {
        const { id } = root;
        return context.prisma.book1({ id }).author();
      }
    }
  };