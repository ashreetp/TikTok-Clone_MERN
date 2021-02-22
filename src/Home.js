import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import './Home.css'

function Home() {
	var items = ["https://source.unsplash.com/1S1w1c4_VyA/1080x520","https://source.unsplash.com/oZqRqFlEXrw",
				"https://source.unsplash.com/hAx-C1Klakw","https://source.unsplash.com/tAH2cA_BL5g",
				"https://source.unsplash.com/16Axr46F1ng"]
	return (
		<div>
			<div className="sign_car">
				<Carousel>
				{
					items.map( (item, i) => 
								<Paper>
						            <img src={item} className="sign_img" />
					        	</Paper>
					        )
				}
				</Carousel>
			</div>
		</div>
	)
}

export default Home