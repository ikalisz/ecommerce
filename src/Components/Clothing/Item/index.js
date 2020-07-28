import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  CardImg,
  CardHeader,
  Button,
} from 'reactstrap'

function ClothingItem({
  clothing,
}) {
  const {
    name,
    cost,
    section,
    src,
  } = clothing

  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <CardImg
          src={src}
        />
        <CardTitle>
          ${cost}
        </CardTitle>
        <Button
          color="primary"
        >
          Add to cart
        </Button>
      </CardBody>
      <CardFooter>
        {section}
      </CardFooter>
    </Card>
  )
}

export default ClothingItem