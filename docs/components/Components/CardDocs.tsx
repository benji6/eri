import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Card, CardGroup } from '../../../src'

export default function CardDocs(_: RouteComponentProps) {
  return (
    <div e-util="slide-in">
      <h2>Card</h2>
      <p>Wrap your Cards in a CardGroup.</p>
      <CardGroup>
        <Card>
          <h3>Card one</h3>
        </Card>
        <Card>
          <h3>Card two</h3>
        </Card>
        <Card>
          <h3>Card three</h3>
        </Card>
        <Card>
          <h3>Card four</h3>
        </Card>
        <Card>
          <h3>Card five</h3>
        </Card>
        <Card>
          <h3>Card six</h3>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card seven</h3>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card eight</h3>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card nine</h3>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card ten</h3>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card eleven</h3>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card twelve</h3>
          <p>A card can also be a button like this one.</p>
        </Card>
      </CardGroup>
    </div>
  )
}
