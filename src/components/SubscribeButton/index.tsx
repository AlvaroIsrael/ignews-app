import { ReactElement } from 'react';
import { Button } from './styles';

type SubscribeButtonProps = {
  priceId: string;
};

export function SubscribeButton({ priceId }: SubscribeButtonProps): ReactElement {
  return (
    <Button type='button' id={priceId}>
      Subscribe now
    </Button>
  );
}
