const should = require('should');
const card = require('../../../../../server/lib/mobiledoc/cards/bookmark');
const SimpleDom = require('simple-dom');
const serializer = new SimpleDom.HTMLSerializer(SimpleDom.voidMap);

describe('Bookmark card', function () {
    it('renders', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: 'Title',
                    description: 'Description',
                    icon: 'http://example.com/icon.png',
                    thumbnail: 'http://exampple.com/thumbnail.png',
                    author: 'Author',
                    publisher: 'Publisher'
                },
                caption: 'Caption'
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('<!--kg-card-begin: bookmark--><figure class="kg-card kg-bookmark-card kg-card-hascaption"><a class="kg-bookmark-container" href="http://example.com"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Title</div><div class="kg-bookmark-description">Description</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="http://example.com/icon.png"><span class="kg-bookmark-author">Author</span><span class="kg-bookmark-publisher">Publisher</span></div></div><div class="kg-bookmark-thumbnail"><img src="http://exampple.com/thumbnail.png"></div></a><figcaption>Caption</figcaption></figure><!--kg-card-end: bookmark-->');
    });

    it('skips icon when missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: 'Title',
                    description: 'Description',
                    icon: null,
                    thumbnail: 'http://exampple.com/thumbnail.png',
                    author: 'Author',
                    publisher: 'Publisher'
                },
                caption: 'Caption'
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('<!--kg-card-begin: bookmark--><figure class="kg-card kg-bookmark-card kg-card-hascaption"><a class="kg-bookmark-container" href="http://example.com"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Title</div><div class="kg-bookmark-description">Description</div><div class="kg-bookmark-metadata"><span class="kg-bookmark-author">Author</span><span class="kg-bookmark-publisher">Publisher</span></div></div><div class="kg-bookmark-thumbnail"><img src="http://exampple.com/thumbnail.png"></div></a><figcaption>Caption</figcaption></figure><!--kg-card-end: bookmark-->');
    });

    it('skips thumbnail when missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: 'Title',
                    description: 'Description',
                    icon: 'http://example.com/icon.png',
                    thumbnail: null,
                    author: 'Author',
                    publisher: 'Publisher'
                },
                caption: 'Caption'
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('<!--kg-card-begin: bookmark--><figure class="kg-card kg-bookmark-card kg-card-hascaption"><a class="kg-bookmark-container" href="http://example.com"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Title</div><div class="kg-bookmark-description">Description</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="http://example.com/icon.png"><span class="kg-bookmark-author">Author</span><span class="kg-bookmark-publisher">Publisher</span></div></div></a><figcaption>Caption</figcaption></figure><!--kg-card-end: bookmark-->');
    });

    it('skips author when missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: 'Title',
                    description: 'Description',
                    icon: 'http://example.com/icon.png',
                    thumbnail: 'http://exampple.com/thumbnail.png',
                    author: null,
                    publisher: 'Publisher'
                },
                caption: 'Caption'
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('<!--kg-card-begin: bookmark--><figure class="kg-card kg-bookmark-card kg-card-hascaption"><a class="kg-bookmark-container" href="http://example.com"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Title</div><div class="kg-bookmark-description">Description</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="http://example.com/icon.png"><span class="kg-bookmark-publisher">Publisher</span></div></div><div class="kg-bookmark-thumbnail"><img src="http://exampple.com/thumbnail.png"></div></a><figcaption>Caption</figcaption></figure><!--kg-card-end: bookmark-->');
    });

    it('skips publisher when missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: 'Title',
                    description: 'Description',
                    icon: 'http://example.com/icon.png',
                    thumbnail: 'http://exampple.com/thumbnail.png',
                    author: 'Author',
                    publisher: null
                },
                caption: 'Caption'
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('<!--kg-card-begin: bookmark--><figure class="kg-card kg-bookmark-card kg-card-hascaption"><a class="kg-bookmark-container" href="http://example.com"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Title</div><div class="kg-bookmark-description">Description</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="http://example.com/icon.png"><span class="kg-bookmark-author">Author</span></div></div><div class="kg-bookmark-thumbnail"><img src="http://exampple.com/thumbnail.png"></div></a><figcaption>Caption</figcaption></figure><!--kg-card-end: bookmark-->');
    });

    it('skips caption when missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: 'Title',
                    description: 'Description',
                    icon: 'http://example.com/icon.png',
                    thumbnail: 'http://exampple.com/thumbnail.png',
                    author: 'Author',
                    publisher: 'Publisher'
                },
                caption: ''
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('<!--kg-card-begin: bookmark--><figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="http://example.com"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Title</div><div class="kg-bookmark-description">Description</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="http://example.com/icon.png"><span class="kg-bookmark-author">Author</span><span class="kg-bookmark-publisher">Publisher</span></div></div><div class="kg-bookmark-thumbnail"><img src="http://exampple.com/thumbnail.png"></div></a></figure><!--kg-card-end: bookmark-->');
    });

    it('renders nothing when payload is undefined', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: undefined
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('');
    });

    it('renders nothing when payload metadata is empty', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {}
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('');
    });

    it('renders nothing when url is missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: null,
                    title: 'Test bookmark',
                    description: 'This is just a test'
                }
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('');
    });

    it('renders nothing when title is missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: null,
                    description: 'This is just a test'
                }
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('');
    });

    it('renders nothing when description is missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                metadata: {
                    url: 'http://example.com',
                    title: 'Test bookmark',
                    description: null
                }
            }
        };

        serializer.serialize(card.render(opts))
            .should.equal('');
    });
});
