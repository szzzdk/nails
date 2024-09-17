import { useParams } from 'react-router-dom';

export const DesignPage = () => {
  const params = useParams<{designId: string}>();
  return (
    <div>
      Design Page {params.designId}
    </div>
  )
};
