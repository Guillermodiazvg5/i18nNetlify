export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      car: {
        Row: {
          brand: string
          color: string
          created_at: string | null
          id: string
          insurance_date: string | null
          kind: string
          picture: string
          plate: string
          soat_date: string
          updated_at: string | null
          user_uid: string
        }
        Insert: {
          brand: string
          color: string
          created_at?: string | null
          id?: string
          insurance_date?: string | null
          kind: string
          picture: string
          plate: string
          soat_date: string
          updated_at?: string | null
          user_uid: string
        }
        Update: {
          brand?: string
          color?: string
          created_at?: string | null
          id?: string
          insurance_date?: string | null
          kind?: string
          picture?: string
          plate?: string
          soat_date?: string
          updated_at?: string | null
          user_uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
      match: {
        Row: {
          created_at: string | null
          driver_accepted: boolean
          id: string
          passanger_accepted: boolean
          post_uid: string
          status: string | null
          trip_uid: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          driver_accepted: boolean
          id?: string
          passanger_accepted: boolean
          post_uid: string
          status?: string | null
          trip_uid: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          driver_accepted?: boolean
          id?: string
          passanger_accepted?: boolean
          post_uid?: string
          status?: string | null
          trip_uid?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_post"
            columns: ["post_uid"]
            isOneToOne: false
            referencedRelation: "post"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_trip"
            columns: ["trip_uid"]
            isOneToOne: false
            referencedRelation: "trip"
            referencedColumns: ["id"]
          },
        ]
      }
      message: {
        Row: {
          created_at: string | null
          id: string
          match_uid: string
          text_message: string
          updated_at: string | null
          user_uid: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          match_uid: string
          text_message: string
          updated_at?: string | null
          user_uid: string
        }
        Update: {
          created_at?: string | null
          id?: string
          match_uid?: string
          text_message?: string
          updated_at?: string | null
          user_uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_match"
            columns: ["match_uid"]
            isOneToOne: false
            referencedRelation: "match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
      notification: {
        Row: {
          created_at: string | null
          id: string
          kind: string
          message: string
          status: string
          updated_at: string | null
          user_uid: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          kind: string
          message: string
          status: string
          updated_at?: string | null
          user_uid: string
        }
        Update: {
          created_at?: string | null
          id?: string
          kind?: string
          message?: string
          status?: string
          updated_at?: string | null
          user_uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
      payment: {
        Row: {
          amount: number
          created_at: string | null
          description: string
          id: string
          kind: string
          match_uid: string
          status: string
          third_payment_id: string
          third_payment_url: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          description: string
          id?: string
          kind: string
          match_uid: string
          status: string
          third_payment_id: string
          third_payment_url: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string
          id?: string
          kind?: string
          match_uid?: string
          status?: string
          third_payment_id?: string
          third_payment_url?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_match"
            columns: ["match_uid"]
            isOneToOne: false
            referencedRelation: "match"
            referencedColumns: ["id"]
          },
        ]
      }
      post: {
        Row: {
          asking_seats: number
          created_at: string | null
          date_trip: string
          description: string | null
          from_trip: string
          id: string
          passenger_uid: string
          to_trip: string
          updated_at: string | null
        }
        Insert: {
          asking_seats: number
          created_at?: string | null
          date_trip: string
          description?: string | null
          from_trip: string
          id?: string
          passenger_uid: string
          to_trip: string
          updated_at?: string | null
        }
        Update: {
          asking_seats?: number
          created_at?: string | null
          date_trip?: string
          description?: string | null
          from_trip?: string
          id?: string
          passenger_uid?: string
          to_trip?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["passenger_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
      rating: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          match_uid: string
          rate: number | null
          rated_user_uid: string
          rating_user_uid: string
          state: string
          updated_at: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          match_uid: string
          rate?: number | null
          rated_user_uid: string
          rating_user_uid: string
          state: string
          updated_at?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          match_uid?: string
          rate?: number | null
          rated_user_uid?: string
          rating_user_uid?: string
          state?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_rated_user"
            columns: ["rated_user_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
          {
            foreignKeyName: "fk_rating_match"
            columns: ["match_uid"]
            isOneToOne: false
            referencedRelation: "match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_rating_user"
            columns: ["rating_user_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
      terms: {
        Row: {
          accepted: boolean
          created_at: string | null
          id: string
          terms_url: string
          terms_version: string
          updated_at: string | null
          user_uid: string
        }
        Insert: {
          accepted: boolean
          created_at?: string | null
          id?: string
          terms_url: string
          terms_version: string
          updated_at?: string | null
          user_uid: string
        }
        Update: {
          accepted?: boolean
          created_at?: string | null
          id?: string
          terms_url?: string
          terms_version?: string
          updated_at?: string | null
          user_uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
      transaction: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          kind: string
          status: string
          updated_at: string | null
          wallet_uid: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          kind: string
          status: string
          updated_at?: string | null
          wallet_uid: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          kind?: string
          status?: string
          updated_at?: string | null
          wallet_uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_wallet"
            columns: ["wallet_uid"]
            isOneToOne: false
            referencedRelation: "wallet"
            referencedColumns: ["id"]
          },
        ]
      }
      trip: {
        Row: {
          available_seats: number
          cost_per_seat: number
          created_at: string | null
          date_trip: string
          driver_uid: string
          from_trip: string
          id: string
          posted_seats: number
          to_trip: string
          trip_description: string
          updated_at: string | null
        }
        Insert: {
          available_seats: number
          cost_per_seat: number
          created_at?: string | null
          date_trip: string
          driver_uid: string
          from_trip: string
          id?: string
          posted_seats: number
          to_trip: string
          trip_description: string
          updated_at?: string | null
        }
        Update: {
          available_seats?: number
          cost_per_seat?: number
          created_at?: string | null
          date_trip?: string
          driver_uid?: string
          from_trip?: string
          id?: string
          posted_seats?: number
          to_trip?: string
          trip_description?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_driver"
            columns: ["driver_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
      user: {
        Row: {
          coming_from: string | null
          created_at: string | null
          description: string | null
          email: string
          id_number: string | null
          id_type: string | null
          name: string
          phone: string | null
          profile_picture: string | null
          rate: number | null
          terms: boolean
          updated_at: string | null
          user_uid: string
        }
        Insert: {
          coming_from?: string | null
          created_at?: string | null
          description?: string | null
          email: string
          id_number?: string | null
          id_type?: string | null
          name: string
          phone?: string | null
          profile_picture?: string | null
          rate?: number | null
          terms?: boolean
          updated_at?: string | null
          user_uid?: string
        }
        Update: {
          coming_from?: string | null
          created_at?: string | null
          description?: string | null
          email?: string
          id_number?: string | null
          id_type?: string | null
          name?: string
          phone?: string | null
          profile_picture?: string | null
          rate?: number | null
          terms?: boolean
          updated_at?: string | null
          user_uid?: string
        }
        Relationships: []
      }
      wallet: {
        Row: {
          amount: number
          created_at: string | null
          currency: string
          id: string
          updated_at: string | null
          user_uid: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency: string
          id?: string
          updated_at?: string | null
          user_uid: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string
          id?: string
          updated_at?: string | null
          user_uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_uid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_uid"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

