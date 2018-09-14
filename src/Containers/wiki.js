import React from 'react'
  const WikiData=(props)=>{
    let propName = Object.keys(props.data.query.pages);

    let article = props.data.query.pages[propName].extract;


return (
<h3 className="title">
{article}
</h3>
)
}
export default WikiData