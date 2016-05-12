function between(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export default function(server) {

  server.createList('story', between(10, 50));

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
