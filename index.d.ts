type ModalProps = {
  children: any
}

type LayoutProps = {
  children: React.ReactNode
  modal: React.ReactNode
}

type ImageDisplay = {
  modal: boolean
  photo: PhotoData
}

type ImagesData = {
  type: Type
  name: string
  createdAt: Date
  updatedAt: Date
  fileId: string
  tags: string[]
  AITags: null
  versionInfo: VersionInfo
  embeddedMetadata: EmbeddedMetadata | null
  customCoordinates: null
  customMetadata: CustomMetadata
  isPrivateFile: boolean
  url: string
  thumbnail: string
  fileType: FileType
  filePath: string
  height: number
  width: number
  size: number
  hasAlpha: boolean
  mime: MIME
}

type PhotoData = {
  id: number
  height: number,
  width: number,
  public_id: string,
  tags: string[]
}

interface CustomMetadata {
  'Aspect Ratio': AspectRatio
  Caption: string
}


