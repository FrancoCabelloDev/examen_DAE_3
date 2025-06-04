import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = ({ count = 8 }) => {
  return (
    <div className="container my-4">
      <div className="row">
        {Array(count).fill().map((_, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <Skeleton height={300} />
            <Skeleton count={3} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
