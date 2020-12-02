import React from 'react';
import ItemLi from './ItemLi';
import ItemSearch from './ItemSearch';

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: [
        {
          title: 'Home',
          subTitle: 'sweet home',
          link: '/home',
          icon: 'fa fa-home',
        },
        {
          title: 'About us',
          subTitle: 'sweet home',
          link: '/about-us',
          icon: 'fa fa-edit',
          isActive: true
        },
        {
          title: 'Features',
          subTitle: 'sweet home',
          link: '/features',
          icon: 'fa fa-gift',
        },
        {
          title: 'News',
          subTitle: 'sweet home',
          link: '/news',
          icon: 'fas fa-globe-asia',
        },
        {
          title: 'Blog',
          subTitle: 'what they say',
          link: '/blog',
          icon: 'fas fa-comments',
          children: [
            {
              title: 'Mission',
              link: '/blog/mission',
              icon: 'fas fa-globe-asia',
            },
            {
              title: 'Our Team',
              link: '/blog/our-team',
              icon: 'fas fa-users',
              children: [
                {
                  title: 'Leyla Sparks',
                  link: '/blog/our-team/leyla-sparks',
                  icon: 'fa fa-female',
                },
                {
                  title: 'Gleb Ismailov',
                  link: '/blog/our-team/gleb-ismailov',
                  icon: 'fa fa-male',
                  children: [
                    {
                      title: 'About',
                      link: '/blog/our-team/gleb-ismailov/about',
                      icon: 'fa fa-leaf',
                    },
                    {
                      title: 'Skills',
                      link: '/blog/our-team/gleb-ismailov/skills',
                      icon: 'fa fa-tasks',
                    }
                  ]
                },
                {
                  title: 'Viktoria Gibbers',
                  link: '/blog/our-team/viktoria-gibbers',
                  icon: 'fa fa-female',
                },
              ]
            },
          ]
        },
        {
          title: 'Portfolio',
          subTitle: 'sweet home',
          link: '/portfolio',
          icon: 'fas fa-images',
        },
        {
          title: 'Contacts',
          subTitle: 'drop a line',
          link: '/contacts',
          icon: 'far fa-envelope',
        }
      ]
    }
  }
  
  render() {
    return (
      <ul id="parent">
        <ItemLi childrenData={this.state.menu}/>
        <ItemSearch/>
      </ul>
    )
  }
}

export default Menu;
