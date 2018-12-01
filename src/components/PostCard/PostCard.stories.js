import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

import PostCard from './PostCard'

const didatticaDigitale = {
  id: 77,
  date: '2018-11-26T13:08:59',
  modified: '2018-11-26T13:08:59',
  slug: 'nuovo-post-didattica-digitale',
  title: { rendered: 'Nuovo post didattica digitale' },
  content: { rendered: '<p>adnioadhiowad</p>\n', protected: false },
  excerpt: { rendered: '<p>adnioadhiowad</p>\n', protected: false },
  author: 1,
  featured_media: 6,
  _embedded: {
    'wp:featuredmedia': [
      {
        id: 6,
        date: '2018-09-23T01:23:26',
        slug: 'cta-1920',
        type: 'attachment',
        link: 'http://143.225.48.253/other/wordpress/cta-1920/',
        title: { rendered: 'cta-1920' },
        author: 1,
        smush: {
          stats: {
            percent: 0.15184160969071817,
            bytes: 179,
            size_before: 117886,
            size_after: 117707,
            time: 0.14,
            api_version: '1.0',
            lossy: false,
            keep_exif: 0,
          },
          sizes: {
            thumbnail: { percent: 0, bytes: 0, size_before: 4586, size_after: 4586, time: 0.02 },
            medium: { percent: 0, bytes: 0, size_before: 8804, size_after: 8804, time: 0.02 },
            medium_large: {
              percent: 0.15,
              bytes: 59,
              size_before: 38624,
              size_after: 38565,
              time: 0.02,
            },
            large: {
              percent: 0.19,
              bytes: 120,
              size_before: 63171,
              size_after: 63051,
              time: 0.07,
            },
            'twentyseventeen-thumbnail-avatar': {
              percent: 0,
              bytes: 0,
              size_before: 2701,
              size_after: 2701,
              time: 0.01,
            },
          },
        },
        caption: { rendered: '' },
        alt_text: '',
        media_type: 'image',
        mime_type: 'image/jpeg',
        media_details: {
          width: 1920,
          height: 1080,
          file: '2018/09/cta-1920.jpeg',
          sizes: {
            thumbnail: {
              file: 'cta-1920-150x150.jpeg',
              width: 150,
              height: 150,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/09/cta-1920-150x150.jpeg',
            },
            medium: {
              file: 'cta-1920-300x169.jpeg',
              width: 300,
              height: 169,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/09/cta-1920-300x169.jpeg',
            },
            medium_large: {
              file: 'cta-1920-768x432.jpeg',
              width: 768,
              height: 432,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/09/cta-1920-768x432.jpeg',
            },
            large: {
              file: 'cta-1920-1024x576.jpeg',
              width: 1024,
              height: 576,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/09/cta-1920-1024x576.jpeg',
            },
            'twentyseventeen-thumbnail-avatar': {
              file: 'cta-1920-100x100.jpeg',
              width: 100,
              height: 100,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/09/cta-1920-100x100.jpeg',
            },
            full: {
              file: 'cta-1920.jpeg',
              width: 1920,
              height: 1080,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/09/cta-1920.jpeg',
            },
          },
          image_meta: {
            aperture: '0',
            credit: '',
            camera: '',
            caption: '',
            created_timestamp: '0',
            copyright: '',
            focal_length: '0',
            iso: '0',
            shutter_speed: '0',
            title: '',
            orientation: '0',
            keywords: [],
          },
        },
        source_url:
          'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/09/cta-1920.jpeg',
        _links: {
          self: [
            {
              attributes: [],
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/media/6',
            },
          ],
          collection: [
            { attributes: [], href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/media' },
          ],
          about: [
            {
              attributes: [],
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/types/attachment',
            },
          ],
          author: [
            {
              attributes: { embeddable: true },
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/users/1',
            },
          ],
          replies: [
            {
              attributes: { embeddable: true },
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/comments?post=6',
            },
          ],
        },
      },
    ],
    'wp:term': [
      [
        {
          id: 1,
          link: 'http://143.225.48.253/other/wordpress/category/uncategorized/',
          name: 'Uncategorized',
          slug: 'uncategorized',
          taxonomy: 'category',
          _links: {
            self: [{ href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/categories/1' }],
            collection: [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/categories' },
            ],
            about: [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/taxonomies/category' },
            ],
            'wp:post_type': [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/posts?categories=1' },
            ],
            curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
          },
        },
      ],
      [
        {
          id: 4,
          link: 'http://143.225.48.253/other/wordpress/tag/didattica-digitale/',
          name: 'Didattica Digitale',
          slug: 'didattica-digitale',
          taxonomy: 'post_tag',
          _links: {
            self: [{ href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/tags/4' }],
            collection: [{ href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/tags' }],
            about: [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/taxonomies/post_tag' },
            ],
            'wp:post_type': [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/posts?tags=4' },
            ],
            curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
          },
        },
      ],
    ],
  },
}

const dataScience = {
  id: 106,
  date: '2018-11-11T21:27:17',
  modified: '2018-11-11T21:27:17',
  slug: 'harum-velit-occaecati-aspernatur-ipsum',
  title: { rendered: 'Harum velit occaecati aspernatur ipsum' },
  content: {
    rendered:
      '<h5>Est dolorem ad cum sed. Id velit quasi iste odio inventore. Dolorem quis est ratione vel. Et sed vel atque commodi dolor quis</h5>\n<ul>\n<li>Magni eos vitae</li>\n<li>Beatae tempore vel est magnam</li>\n</ul>\n<blockquote><p>Odit ut dolore id repellat ut. Facilis sed assumenda repudiandae. Consequatur omnis aut nesciunt tenetur sit quae. Expedita atque sunt ipsam voluptas. quos dolorem quisquam dicta cupiditate. incidunt saepe illum autem delectus quae Sunt repellendus eum suscipit. Id non omnis a qui Repellat eos vero modi dolor voluptates. culpa voluptatem recusandae Illo magnam tenetur. Distinctio at officiis rerum pariatur. maiores ad Natus rerum et <a title="Beatae asperiores." href="http://www.altenwerth.com/">Ratione enim officia odit tempora qui</a> nobis. Et rerum maiores ut. Quis assumenda et veritatis Et fugiat necessitatibus voluptatum dignissimos ea. Amet optio consequatur Iure ut maiores tenetur a perspiciatis. Reprehenderit ipsa et accusantium et omnis. Quia optio delectus sunt in commodi nulla. ea illum et reprehenderit. Voluptates minima illo reprehenderit officia. Nam sunt tenetur et. nesciunt nam praesentium Quae libero ullam sed. Beatae dolore quae totam. Ea nam ab animi nobis. Facere ut et sit quod amet. Quae voluptatem a commodi aut aliquid ex. Doloremque dignissimos tenetur qui. Debitis sequi similique nobis. libero dignissimos consectetur. <a title="Deserunt illo possimus blanditiis id error." href="http://www.franecki.com/atque-labore-magnam-inventore-alias">placeat voluptatum facere saepe</a> aut dicta. Aspernatur magnam aliquid dignissimos cum aperiam iste. numquam voluptas est facilis facilis qui facilis. Aut quia maiores laborum a ipsam. Ut debitis officiis. labore voluptatum accusamus ut reprehenderit Reiciendis sunt libero aut dolorem. Aliquam quisquam quia qui est. eum voluptate culpa hic rerum tenetur ex. perferendis eius</p></blockquote>\n<h4>Omnis ex mollitia et iure quaerat dolore. Commodi debitis nihil sit voluptatem eaque. Ipsa aut quia laborum enim aut omnis voluptatibus et</h4>\n<p><img></p>\n<hr>\n<h4>Est deleniti incidunt quia et. Quae similique consequatur qui ratione quia. Provident dolorem autem sed optio a</h4>\n<blockquote><p>Illo veniam eos consequatur molestias incidunt. officia voluptatum eligendi voluptas aut aperiam repellat. autem odit est quam <a title="Cum cumque blanditiis." href="http://www.mraz.net/ullam-molestias-minima-et-neque-consequatur-quia.html">Recusandae eligendi</a> et consectetur suscipit et. Velit ipsam esse eaque delectus. Quo sunt repellendus consequatur officia. Ipsa modi aperiam et. Qui consectetur <a title="Cumque maiores." href="http://jast.info/a-ut-odit-velit-esse-aut-quam">in. Odio rerum rerum incidunt necessitatibus voluptatibus</a> Nostrum distinctio et <a title="Alias incidunt inventore nostrum earum." href="http://www.gibson.info/sapiente-aspernatur-quis-necessitatibus-sit-sint-nulla-maiores">Ad vel et non</a> aut veritatis earum Voluptas quo culpa soluta ut maiores.</p></blockquote>\n<p><img><br />\n<!--more--></p>\n<ol>\n<li>Sint ut vero pariatur quia</li>\n<li>Sint provident reprehenderit voluptatem</li>\n</ol>\n<hr>\n<h3>Voluptatum voluptatem consequatur sed dolorum dolorem nobis voluptatum ducimus</h3>\n<hr>\n<blockquote><p>Voluptas iste vel minima exercitationem. velit culpa <a title="Est exercitationem nam." href="http://buckridge.com/">quo et</a> illo dignissimos. Et perferendis quisquam explicabo qui. Debitis reprehenderit quaerat dolor reprehenderit Harum id aperiam alias aut voluptatem dolor Fugit quam veniam itaque aut mollitia Adipisci nulla iste ipsam tempore. Voluptatem molestiae est aliquid consequatur beatae. Excepturi nihil et molestiae earum. Accusamus aut qui repudiandae dignissimos Praesentium ad et voluptates qui ut. Culpa dolore omnis dolorum Labore ut ipsa id. Eos tempore fugit maxime fuga Nam similique consectetur magni nemo et. Aliquam minima perspiciatis illo aut eius inventore aut. libero quo rerum voluptas praesentium. Consequatur ut numquam consequatur quia a. Sed exercitationem libero architecto excepturi. Sed impedit suscipit sint neque Porro sed tempore architecto consequatur. Impedit voluptatem sequi debitis eligendi cupiditate unde. qui nam voluptate. Dolorem harum laudantium sunt Veniam quia reiciendis magni omnis facilis voluptas aut. Iure aperiam consequatur rerum. placeat et ut blanditiis molestias. Consequatur qui error. Autem ratione provident voluptatibus. placeat quos perferendis doloribus quisquam praesentium. quam temporibus eligendi qui Incidunt et eius eaque id consequatur qui. Debitis quam aut alias atque laboriosam.</p></blockquote>\n<p><img></p>\n',
    protected: false,
  },
  excerpt: {
    rendered:
      '<p>Tempore quis dignissimos dolore similique officia magnam et itaque error ipsam et debitis dolor et porro quia assumenda eveniet eligendi veritatis soluta exercitationem aut atque distinctio est aut nostrum quia voluptatum molestiae quia nam ut voluptatibus placeat consequatur voluptatibus sed et voluptatibus placeat rerum aut quis vero ab.</p>\n',
    protected: false,
  },
  _embedded: {
    'wp:featuredmedia': [
      {
        id: 26,
        date: '2018-10-01T19:22:11',
        slug: 'data-science',
        type: 'attachment',
        link: 'http://143.225.48.253/other/wordpress/data-science/',
        title: { rendered: 'data-science' },
        author: 1,
        smush: {
          stats: {
            percent: 0.1385104303532016,
            bytes: 214,
            size_before: 154501,
            size_after: 154287,
            time: 0.19000000000000003,
            api_version: '1.0',
            lossy: false,
            keep_exif: 0,
          },
          sizes: {
            thumbnail: { percent: 0, bytes: 0, size_before: 5586, size_after: 5586, time: 0.02 },
            medium: {
              percent: 0.21,
              bytes: 23,
              size_before: 10874,
              size_after: 10851,
              time: 0.02,
            },
            medium_large: {
              percent: 0.37,
              bytes: 191,
              size_before: 51609,
              size_after: 51418,
              time: 0.07,
            },
            large: { percent: 0, bytes: 0, size_before: 83424, size_after: 83424, time: 0.07 },
            'twentyseventeen-thumbnail-avatar': {
              percent: 0,
              bytes: 0,
              size_before: 3008,
              size_after: 3008,
              time: 0.01,
            },
          },
        },
        caption: { rendered: '' },
        alt_text: '',
        media_type: 'image',
        mime_type: 'image/jpeg',
        media_details: {
          width: 1920,
          height: 1080,
          file: '2018/10/data-science.jpg',
          sizes: {
            thumbnail: {
              file: 'data-science-150x150.jpg',
              width: 150,
              height: 150,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/10/data-science-150x150.jpg',
            },
            medium: {
              file: 'data-science-300x169.jpg',
              width: 300,
              height: 169,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/10/data-science-300x169.jpg',
            },
            medium_large: {
              file: 'data-science-768x432.jpg',
              width: 768,
              height: 432,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/10/data-science-768x432.jpg',
            },
            large: {
              file: 'data-science-1024x576.jpg',
              width: 1024,
              height: 576,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/10/data-science-1024x576.jpg',
            },
            'twentyseventeen-thumbnail-avatar': {
              file: 'data-science-100x100.jpg',
              width: 100,
              height: 100,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/10/data-science-100x100.jpg',
            },
            full: {
              file: 'data-science.jpg',
              width: 1920,
              height: 1080,
              mime_type: 'image/jpeg',
              source_url:
                'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/10/data-science.jpg',
            },
          },
          image_meta: {
            aperture: '0',
            credit: '',
            camera: '',
            caption: '',
            created_timestamp: '0',
            copyright: '',
            focal_length: '0',
            iso: '0',
            shutter_speed: '0',
            title: '',
            orientation: '0',
          },
        },
        source_url:
          'http://143.225.48.253/other/wordpress/wp-content/uploads/2018/10/data-science.jpg',
        _links: {
          self: [
            {
              attributes: [],
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/media/26',
            },
          ],
          collection: [
            { attributes: [], href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/media' },
          ],
          about: [
            {
              attributes: [],
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/types/attachment',
            },
          ],
          author: [
            {
              attributes: { embeddable: true },
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/users/1',
            },
          ],
          replies: [
            {
              attributes: { embeddable: true },
              href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/comments?post=26',
            },
          ],
        },
      },
    ],
    'wp:term': [
      [
        {
          id: 1,
          link: 'http://143.225.48.253/other/wordpress/category/uncategorized/',
          name: 'Uncategorized',
          slug: 'uncategorized',
          taxonomy: 'category',
          _links: {
            self: [{ href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/categories/1' }],
            collection: [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/categories' },
            ],
            about: [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/taxonomies/category' },
            ],
            'wp:post_type': [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/posts?categories=1' },
            ],
            curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
          },
        },
      ],
      [
        {
          id: 3,
          link: 'http://143.225.48.253/other/wordpress/tag/data-science/',
          name: 'Data Science',
          slug: 'data-science',
          taxonomy: 'post_tag',
          _links: {
            self: [{ href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/tags/3' }],
            collection: [{ href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/tags' }],
            about: [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/taxonomies/post_tag' },
            ],
            'wp:post_type': [
              { href: 'http://143.225.48.253/other/wordpress/wp-json/wp/v2/posts?tags=3' },
            ],
            curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
          },
        },
      ],
    ],
  },
}

const CenterDecorator = storyFn => (
  <div className="container center">
    <div className="row">
      <div className="col s12 l6 push-l3">{storyFn()}</div>
    </div>
  </div>
)

storiesOf('Post Card', module)
  .addDecorator(CenterDecorator)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Didattica Digitale', () => <PostCard post={object('post', didatticaDigitale)} />)
  .add('Data Science', () => <PostCard post={object('post', dataScience)} />)
