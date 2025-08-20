import { Skeleton } from "@/components/ui/skeleton";

export const ExploreSectionSkeleton = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Skeleton className="h-10 w-48 mx-auto mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border">
              <Skeleton className="h-48 w-full" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-16 w-full" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RecentBlogsSkeleton = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Skeleton className="h-10 w-72 mx-auto mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border">
              <div className="flex flex-col md:flex-row">
                <Skeleton className="h-48 md:h-32 w-full md:w-48 flex-shrink-0" />
                <div className="p-6 flex-1 space-y-3">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex items-center gap-4 pt-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Skeleton className="h-10 w-32 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export const LoadMoreSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-card rounded-lg overflow-hidden border">
          <div className="flex flex-col md:flex-row">
            <Skeleton className="h-48 md:h-32 w-full md:w-48 flex-shrink-0" />
            <div className="p-6 flex-1 space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex items-center gap-4 pt-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};