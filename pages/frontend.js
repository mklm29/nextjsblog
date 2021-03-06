import Navigation from '../components/Navigation'
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import Link from 'next/link'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'https://lamcrazyweb.com/wp-json/wp/v2/frontend')

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }
  render() {
      return (
        <Fragment>
          <Navigation/>
          <h1>Our Posts Page!</h1>
          <ul>
            {
              this.props.posts.map( post => {
                return (
                  <li key={ post.id }>
                      <Link href={ `/frontend/${ post.slug }` }>
                          <a href={ `/frontend/${ post.slug }` }>
                              { post.title.rendered }
                          </a>
                      </Link>
                  </li>
                )
              })
            }
          </ul>
        </Fragment>
      )
   }
}
