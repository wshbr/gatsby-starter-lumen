// @flow
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

type Props = {
  +isIndex: ?boolean,
};

type PureProps = Props & {
  +data: Object,
};

export const PureSidebar = ({ data, isIndex }: PureProps) => {
  const {
    author,
    copyright,
    menu
  } = data.site.siteMetadata;

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export const Sidebar = (props: Props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            copyright
            menu {
              label
              path
            }
            author {
              name
              photo
              bio
              contacts {
                twitter
                instagram
                email
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureSidebar {...props} data={data}/>}
  />
);

export default Sidebar;
