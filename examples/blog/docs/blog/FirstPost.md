---
title: First Post
image: https://pbs.twimg.com/profile_banners/7547562/1516584955/1500x500
author:
  name: Andrew Lisowski
  url: https://github.intuit.com/alisowski
  email: lisowski54@gmail.com
---

I am the first post

Pellentesque et pulvinar quam. Integer et metus non felis laoreet interdum quis id justo. Proin scelerisque diam eget lorem viverra lacinia. Nulla et convallis sapien. Ut mauris nisi, ultrices quis dui sit amet, rhoncus auctor arcu. Fusce et velit molestie, posuere est vitae, dictum est. Fusce vel risus ac libero maximus luctus. Sed fermentum augue in mauris pretium vestibulum. Proin dolor lacus, volutpat in nisi sit amet, laoreet accumsan magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam et tempus neque. Maecenas tortor tortor, auctor ac risus et, egestas sagittis elit. Morbi ac massa augue. Phasellus bibendum nulla diam, nec tempus urna congue vel. Donec ullamcorper turpis et ligula volutpat, placerat consectetur est hendrerit. Aliquam eget viverra metus.

This is our implementation of a font-awesome 5 plugin. It matches tags in the markdown the look like `:far-flag:` and replaces them with the html representation.

```js
import makePlugin from 'markdown-it-regexp';

export default function fontawesomePlugin(md) {
  md.use(
    makePlugin(/:[a-z]{2,}-[a-z]{2,}:/, match => {
      const [type, icon] = match[0].split(':')[1].split('-');
      return `<i class="${type} fa-${icon}"></i>`;
    })
  );
}
```

Etiam tincidunt est tortor, sed consectetur augue pellentesque et. Sed sit amet elementum purus. Nunc et leo quis justo ultrices faucibus et eu arcu. Nulla facilisi. Vestibulum et nisi vitae urna vulputate faucibus. In cursus iaculis aliquam. Fusce tempor facilisis eleifend.

Curabitur viverra elementum dolor, nec dapibus quam vulputate nec. Fusce laoreet velit ut est pulvinar porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut lacinia dui. Aenean nec erat blandit, efficitur mi at, dictum turpis. Suspendisse potenti. Mauris at nibh pulvinar, semper diam sit amet, egestas tellus. Nam varius tellus quis enim varius, eget pretium turpis condimentum. Integer cursus neque mattis libero rutrum mollis. Aliquam at suscipit est, eu rutrum mauris. Quisque in urna quam. Donec porta ligula nec magna auctor dictum. Etiam ut fermentum purus, id tristique nisl. Nunc porttitor, mauris interdum tincidunt dictum, est lectus feugiat nulla, nec cursus purus metus nec magna. Ut sed ipsum at libero finibus elementum et et magna. Sed ac facilisis purus, mattis dignissim sapien.

Donec mollis diam sit amet sodales faucibus. Integer rhoncus lacus nunc, in tincidunt lorem auctor nec. Integer porta magna quis eros sollicitudin, vel lobortis nisl interdum. Quisque fringilla dolor sit amet justo posuere placerat. Duis feugiat velit eu velit vulputate, sit amet interdum diam cursus. Curabitur varius velit vitae diam tempus, non faucibus dui porta. Etiam imperdiet sit amet justo a varius. Suspendisse quis odio lacus. Aliquam quis viverra nisi, id ullamcorper turpis. Fusce non feugiat quam. Aliquam varius euismod turpis at fermentum.

Tags: #:is-info:is-medium first post #:is-info:is-medium lorem ipsum
