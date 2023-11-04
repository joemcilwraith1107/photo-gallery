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

type PhotosData = {
  id: number
  height: number,
  width: number,
  public_id: string,
  tags: string[]
}

interface PhotoData {
  asset_id:      string;
  public_id:     string;
  format:        string;
  version:       number;
  resource_type: string;
  type:          string;
  created_at:    Date;
  bytes:         number;
  width:         number;
  height:        number;
  asset_folder:  string;
  display_name:  string;
  url:           string;
  secure_url:    string;
  context:       Context;
  last_updated:  LastUpdated;
  tags:          string[];
  next_cursor:   string;
  derived:       Derived[];
}

interface Context {
  custom: Custom;
}

interface Custom {
  caption: string;
}

interface Derived {
  transformation: string;
  format:         string;
  bytes:          number;
  id:             string;
  url:            string;
  secure_url:     string;
}

interface LastUpdated {
  context_updated_at: Date;
  tags_updated_at:    Date;
  updated_at:         Date;
}



