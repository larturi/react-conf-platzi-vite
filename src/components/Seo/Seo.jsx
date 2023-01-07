/* eslint-disable no-unused-vars */

import { Helmet } from 'react-helmet'

export const SEO = ({ title, description, meta = [] }) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    />
  )
}
