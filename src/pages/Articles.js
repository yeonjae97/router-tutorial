import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';


const ArticlItem = ({id}) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  }
  return (
    <li>
      <NavLink 
        to={`/articles/${id}`}
        style={({isActive}) => (isActive ? activeStyle : undefined)}
        >
          게시글 {id}
      </NavLink>
    </li>
  )
}


const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticlItem id={1} />
        <ArticlItem id={2} />
        <ArticlItem id={3} />
      </ul>
    </div>
  );
};

export default Articles;