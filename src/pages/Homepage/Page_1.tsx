'use client';

import ExploreMoreBlock from "@/components/exploremore";

export default function Page_1() {
  return (
    <ExploreMoreBlock
      heading="Built to Learn, Written to Share "
      body="No fluff. Just frameworks, findings, and future-forward thinking."
      perPage={6}
      firstN={4}
      contentType="blogs"
    />
  );
}
