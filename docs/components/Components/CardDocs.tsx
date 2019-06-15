import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Card, CardGroup } from '../../../src'

export default function CardDocs(_: RouteComponentProps) {
  return (
    <>
      <h3>Card</h3>
      <p>Wrap your Cards in a CardGroup.</p>
      <CardGroup>
        <Card onClick={() => undefined}>
          <h3>Card one</h3>
          <p>This is card one.</p>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card two</h3>
          <p>This is card two.</p>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card three</h3>
          <p>This is card three.</p>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card four</h3>
          <p>This is card four.</p>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card five</h3>
          <p>This is card five.</p>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card onClick={() => undefined}>
          <h3>Card six</h3>
          <p>This is card six.</p>
          <p>A card can also be a button like this one.</p>
        </Card>
        <Card>
          <h3>Card seven</h3>
          <p>This is card seven.</p>
        </Card>
        <Card>
          <h3>Card eight</h3>
          <p>This is card eight.</p>
        </Card>
        <Card>
          <h3>Card nine</h3>
          <p>This is card nine.</p>
        </Card>
        <Card>
          <h3>Card ten</h3>
          <p>This is card ten.</p>
        </Card>
        <Card>
          <h3>Card eleven</h3>
          <p>This is card eleven.</p>
        </Card>
        <Card>
          <h3>Card twelve</h3>
          <p>This is card twelve.</p>
        </Card>
      </CardGroup>
    </>
  )
}
