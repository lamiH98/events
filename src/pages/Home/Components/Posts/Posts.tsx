import React from 'react'
import './_posts.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../../../../Components/Post/Post'
import TitleSection from '../../../../Components/Utility/TitleSection/TitleSection'
import { posts } from '../../../../data.js'

const Posts: React.FC = () => {
  return (
    <div className="posts">
			<Container>
				<Row>
					<TitleSection title="News & blogs" subTitle="Latest From Newsroom" />
					{
						posts.map((post, index) => (
							<Col lg={4} md={6} key={index}>
								<Post post={post} />
							</Col>
						))
					}
				</Row>
			</Container>
    </div>
  )
}

export default Posts
