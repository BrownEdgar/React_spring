import React from 'react'
import classNames from 'classnames'
import './Pagination.scss'

export default function Pagination({ total, page, perPage, changePage }) {
  const list = [];
  for (let i = 1; i < Math.ceil(total / perPage); i++) {
    list.push(i)
  }

  return (
    <div className='Pagination'>
      <ul className='Pagination__list'>
        {
          list.map(item => {
            return (
              <li key={item} className={classNames('Pagination__item', {
                'Pagination__item-active': item === page
              })
              }>
                <a href="#" className='Pagination__link' onClick={() => changePage(item)}>{item}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
