import React from 'react';
import classNames from 'classnames';

import type { WorkItemProps } from './work-item.props';

import './work-item.scss';

const WorkItem = ({ title, description, href, imageSrc, withIcon }: WorkItemProps) => {
  return (
    <a className="work-item" href={href} target="_blank" rel="noreferrer">
      {imageSrc && <img className="work-item__image" src={imageSrc} alt={title} />}
      <div className="work-item__text">
        <h3 className={classNames('work-item__title', withIcon && 'work-item__title_with-icon')}>{title}</h3>
        <p className="work-item__description">{description}</p>
      </div>
    </a>
  );
};

export default WorkItem;
