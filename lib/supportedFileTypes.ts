/** Kubernetes manifest files. */
export const FILE_TYPE_K8S = "k8s";
/** XML files. */
export const FILE_TYPE_XML = "xml";
/** Pubspec.yaml files. */
export const FILE_TYPE_FLUTTER = "flutter";

/** A list of all files that are supported. */
export const supportedFileTypes = [FILE_TYPE_FLUTTER, FILE_TYPE_K8S, FILE_TYPE_XML];

/** A TypeScript type with supported file types. */
export type SupportedFileTypes = typeof FILE_TYPE_K8S | typeof FILE_TYPE_XML | typeof FILE_TYPE_FLUTTER;
