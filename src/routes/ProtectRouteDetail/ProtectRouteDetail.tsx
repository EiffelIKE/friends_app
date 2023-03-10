import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../shared/hooks/reduxHooks';
import { selectDetails } from '../../store/slices/detailSlice';
import Details from '../../pages/Details';

const ProtectRouteDetail = () => {
  const location = useLocation();
  const data = useAppSelector(selectDetails);

  return Object.keys(data).length > 0 ? (
    <Details data={data} />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectRouteDetail;
