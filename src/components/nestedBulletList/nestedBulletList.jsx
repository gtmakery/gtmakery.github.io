import React from 'react';


const NestedBulletList = ({bullets}) => {
  return (!bullets) ? (null) : <ul className="">
    { !!bullets && !!bullets.length && bullets.map(bullet => {
      return <BulletItem item={bullet} />
    })}
  </ul>
};

const BulletItem = ({item}) => {
  return (!item) ? (null) : <li className="">
    { !!item && ((typeof item === "string" && !!item.length)
          || ((!!item.text && typeof item.text === "string" && item.text.length) ^ (!!item.string && typeof item.string === "string" && item.string.length))) &&
      <p className="">
        {typeof item === "string" ? item : (item.text || item.string)}
      </p>
    }
    { !!item && typeof item === "object" && ((item.constructor.name === "Array" && item.length)
          || ((!!item.items && item.items.constructor.name === "Array" && item.items.length)
            ^ (!!item.subBullets && item.subBullets.constructor.name === "Array" && item.subBullets.length)
            ^ (!!item.bullets && item.bullets.constructor.name === "Array" && item.bullets.length))) &&
      <NestedBulletList bullets={item.constructor.name === "Array" ? item : (item.items || item.subBullets || item.bullets)} />
    }
  </li>
};

export default NestedBulletList;
export { BulletItem };
