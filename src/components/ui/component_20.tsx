import React from "react";

export default function EditableTextBlock({
  heading = "Built Different? So Are We!",
  body = `You’re not here to fit into a checkbox, we’re not here to hand out templated roles. If you vibe with what we’re building but don’t see your title listed, write to us at <a href="mailto:recruitment@growthnatives.com" style="color:#3b82f6; text-decoration:underline">recruitment@growthnatives.com</a>.`,
  className = "",
}) {
  return (
    <div className={`max-w-2xl mx-auto text-center mt-10 ${className}`}>
      <h3 className="font-bold text-3xl mb-2">{heading}</h3>
      <div
        className="text-base text-gray-800"
        dangerouslySetInnerHTML={{
          __html: body.replace(/\n/g, "<br/>"),
        }}
      />
    </div>
  );
}
