import Skeleton from 'react-loading-skeleton';

export default function LoadingSkeleton() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="col">
          <div className="card h-100 shadow-sm border-0">
            {/* Image Skeleton */}
            <div style={{ height: '200px' }}>
              <Skeleton height="100%" />
            </div>
            
            {/* Content Skeleton */}
            <div className="card-body p-3">
              <div className="mb-2">
                <Skeleton height={20} width="80%" />
              </div>
              <div className="mb-2">
                <Skeleton height={16} width="50%" />
              </div>
              <div className="mb-3">
                <Skeleton height={14} count={2} />
              </div>
              <div>
                <Skeleton height={32} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}