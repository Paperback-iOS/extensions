/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MUTimeV1 {
  /** timestamp */
  timestamp?: number;

  /**
   * as_rfc3339
   * @format date-time
   */
  as_rfc3339?: string;

  /** as_string */
  as_string?: string;
}

export interface MUTimeUpdateV1 {
  /** timestamp */
  timestamp?: number;
}

export interface MUMiscSlowTransactionStatusResponseV1 {
  /** state */
  state?: "pending" | "in progress" | "complete" | "error";

  /** error */
  error?: string;

  /** percent */
  percent?: number;

  /** done */
  done?: number;

  /** total */
  total?: number;

  /** return */
  return?: string;
}

export interface MUMiscOnlineUsersModelV1 {
  /** users */
  users?: {
    record?: MUUserModelSearchV1;
    metadata?: { last_active?: MUTimeV1; invisible?: boolean; super_moderator?: boolean };
  }[];
}

export interface MUMiscStatsModelV1 {
  /** total_users */
  total_users?: number;
  latest_user?: MUUserModelSearchV1;

  /** total_forum_topics */
  total_forum_topics?: number;

  /** total_forum_posts */
  total_forum_posts?: number;
}

export interface MUGenreModelV1 {
  /** id */
  id?: number;

  /** genre */
  genre?: string;

  /** description */
  description?: string;

  /** demographic */
  demographic?: boolean;
}

export interface MUGenreModelStatsV1 {
  /** id */
  id?: number;

  /** genre */
  genre?: string;

  /** description */
  description?: string;

  /** GenreModelStatsV1Stats */
  stats?: { series?: number; authors?: number; filters?: number; highlights?: number };

  /** demographic */
  demographic?: boolean;
}

export interface MUGenreModelUpdateV1 {
  /** genre */
  genre?: string;

  /** description */
  description?: string;

  /** demographic */
  demographic?: boolean;
}

export interface MUConvoModelAddV1 {
  /** topic */
  topic?: string;

  /** participants */
  participants?: MUConvoParticipantModelAddV1[];
  message?: MUConvoMessageModelUpdateV1;
}

export interface MUConvoParticipantModelAddV1 {
  /** to */
  to?: string;
}

export interface MUConvoUserIgnoreModelV1 {
  /** user_ignored */
  user_ignored?: boolean;
}

export interface MUConvoMessageListRequestV1 {
  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUConvoMessageSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUConvoMessageModelV1; metadata?: { user_ignored?: boolean } }[];
}

export interface MUConvoSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: {
    record?: MUConvoModelV1;
    metadata?: { message?: MUConvoMessageModelV1; participant?: MUConvoParticipantModelV1 };
  }[];
}

export interface MUConvoMessageSearchRequestV1 {
  /** search */
  search?: string;

  /** added_by */
  added_by?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUConvoBulkModelV1 {
  /** convo_id_list */
  convo_id_list?: number[];
}

export interface MUConvoParticipantModelV1 {
  /** user_id */
  user_id?: number;

  /** username */
  username?: string;

  /** is_admin */
  is_admin?: boolean;
  time_added?: MUTimeV1;
  last_time_seen?: MUTimeV1;

  /** joined */
  joined?: boolean;
}

export interface MUConvoMessageModelV1 {
  /** message_id */
  message_id?: number;

  /** convo_id */
  convo_id?: number;

  /** author_id */
  author_id?: number;

  /** author_name */
  author_name?: string;

  /** is_admin */
  is_admin?: boolean;

  /** content */
  content?: string;
  time_added?: MUTimeV1;
  last_edit?: MUTimeV1;
}

export interface MUConvoMessageModelUpdateV1 {
  /** content */
  content?: string;
}

export interface MUConvoSearchRequestV1 {
  /** search */
  search?: string;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUConvoModelV1 {
  /** convo_id */
  convo_id?: number;

  /** topic */
  topic?: string;

  /** author_id */
  author_id?: number;

  /** author_name */
  author_name?: string;
  time_added?: MUTimeV1;
  last_edit?: MUTimeV1;
}

export interface MUConvoModelUpdateV1 {
  /** topic */
  topic?: string;
}

export interface MUUserGenreFilterModelV1 {
  /** genre_id */
  genre_id?: number;

  /** genre_name */
  genre_name?: string;
}

export interface MUUserChangeRequestModelV1 {
  /** id */
  id?: number;

  /** body */
  body?: string;
  added_by?: MUUserModelSearchV1;
  time_added?: MUTimeV1;
}

export interface MUUserChangeRequestModelUpdateV1 {
  /** body */
  body?: string;

  /** archived */
  archived?: boolean;
}

export interface MUUserGroupModelV1 {
  /** id */
  id?: string;

  /** name */
  name: string;

  /** description */
  description: string;
}

export interface MUUserGroupModelUpdateV1 {
  /** name */
  name: string;

  /** description */
  description: string;
}

export interface MUUserSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUUserModelSearchV1 }[];
}

export interface MUUserModelV1 {
  /** user_id */
  user_id?: number;

  /** username */
  username?: string;

  /** url */
  url?: string;

  /** email */
  email?: string;
  avatar?: MUAvatarModelV1;
  time_joined?: MUTimeV1;
  last_active_time?: MUTimeV1;

  /** gender */
  gender?: "N/A" | "Male" | "Female" | "Alien" | "Hermaphrodite";
  birthday?: MUBirthdayModelV1;

  /** age */
  age?: number;

  /** timezone */
  timezone?: number;

  /** signature */
  signature?: string;

  /** location */
  location?: string;

  /** forum_title */
  forum_title?: string;

  /** folding_at_home */
  folding_at_home?: boolean;

  /** UserModelV1Profile */
  profile?: {
    per_page?: number;
    invisible?: boolean;
    hide_birthday?: boolean;
    hide_categories?: boolean;
    filter_types?: (
      | "Artbook"
      | "Doujinshi"
      | "Drama CD"
      | "Filipino"
      | "Indonesian"
      | "Manga"
      | "Manhwa"
      | "Manhua"
      | "Novel"
      | "OEL"
      | "Thai"
      | "Vietnamese"
      | "Malaysian"
      | "Nordic"
      | "French"
      | "Spanish"
    )[];
    upgrade?: { requested?: boolean; reason?: string };
    age18_verified?: boolean;
  };

  /** UserModelV1Stats */
  stats?: {
    forum_posts?: number;
    added_authors?: number;
    added_groups?: number;
    added_publishers?: number;
    added_releases?: number;
    added_series?: number;
    series_edits?: number;
    author_edits?: number;
    publisher_edits?: number;
    added_tags?: number;
    moderation?: {
      releases?: { approved?: number; rejected?: number; deleted?: number };
      series?: { approved?: number; rejected?: number; deleted?: number };
      publishers?: { approved?: number; rejected?: number; deleted?: number };
      groups?: { approved?: number; rejected?: number; deleted?: number };
      authors?: { approved?: number; rejected?: number; deleted?: number };
      last_action?: MUTimeV1;
    };
  };

  /** UserModelV1Admin */
  admin?: {
    is_admin?: boolean;
    registration_ip?: string;
    permissions?: {
      p_add_releases?: boolean;
      p_edit_users?: boolean;
      p_edit_groups?: boolean;
      p_edit_poll?: boolean;
      p_edit_series?: boolean;
      p_edit_reviews?: boolean;
      p_edit_news?: boolean;
      p_edit_affiliates?: boolean;
      p_edit_aboutus?: boolean;
      p_view_log?: boolean;
      p_edit_config?: boolean;
      p_view_stats?: boolean;
      p_edit_genre?: boolean;
      p_edit_authors?: boolean;
      p_edit_publishers?: boolean;
      p_edit_partial_users?: boolean;
    };
    last_series_update?: MUTimeV1;
    approved?: boolean;
    email_approved?: boolean;
    forum_admin?: boolean;
    registration_reason?: string;
    upgrade?: { banned?: boolean };
    banned?: boolean;
  };

  /** user_group */
  user_group?: string;

  /** user_group_name */
  user_group_name?: string;
}

export interface MUUserModelSearchV1 {
  /** user_id */
  user_id?: number;

  /** username */
  username?: string;

  /** url */
  url?: string;
  avatar?: MUAvatarModelSearchV1;
  time_joined?: MUTimeV1;

  /** signature */
  signature?: string;

  /** forum_title */
  forum_title?: string;

  /** folding_at_home */
  folding_at_home?: boolean;

  /** UserModelSearchV1Profile */
  profile?: { upgrade?: { requested?: boolean; reason?: string } };

  /** UserModelSearchV1Stats */
  stats?: {
    forum_posts?: number;
    added_authors?: number;
    added_groups?: number;
    added_publishers?: number;
    added_releases?: number;
    added_series?: number;
  };

  /** user_group */
  user_group?: string;

  /** user_group_name */
  user_group_name?: string;
}

export interface MUUserModelUpdateV1 {
  /** username */
  username?: string;

  /** email */
  email?: string;

  /**
   * password
   * @format password
   */
  password?: string;

  /** new_avatar_id */
  new_avatar_id?: number;

  /** gender */
  gender?: "N/A" | "Male" | "Female" | "Alien" | "Hermaphrodite";
  birthday?: MUBirthdayModelV1;

  /** timezone */
  timezone?: number;

  /** signature */
  signature?: string;

  /** location */
  location?: string;

  /** forum_title */
  forum_title?: string;

  /** folding_at_home */
  folding_at_home?: boolean;

  /** UserModelUpdateV1Profile */
  profile?: {
    per_page?: number;
    invisible?: boolean;
    hide_birthday?: boolean;
    hide_categories?: boolean;
    filter_types?: (
      | "Artbook"
      | "Doujinshi"
      | "Drama CD"
      | "Filipino"
      | "Indonesian"
      | "Manga"
      | "Manhwa"
      | "Manhua"
      | "Novel"
      | "OEL"
      | "Thai"
      | "Vietnamese"
      | "Malaysian"
      | "Nordic"
      | "French"
      | "Spanish"
    )[];
    upgrade?: { requested?: boolean; reason?: string };
    age18_verified?: boolean;
  };

  /** UserModelUpdateV1Admin */
  admin?: {
    is_admin?: boolean;
    permissions?: {
      p_add_releases?: boolean;
      p_edit_users?: boolean;
      p_edit_groups?: boolean;
      p_edit_poll?: boolean;
      p_edit_series?: boolean;
      p_edit_reviews?: boolean;
      p_edit_news?: boolean;
      p_edit_affiliates?: boolean;
      p_edit_aboutus?: boolean;
      p_view_log?: boolean;
      p_edit_config?: boolean;
      p_view_stats?: boolean;
      p_edit_genre?: boolean;
      p_edit_authors?: boolean;
      p_edit_publishers?: boolean;
      p_edit_partial_users?: boolean;
    };
    approved?: boolean;
    email_approved?: boolean;
    forum_admin?: boolean;
    banned?: boolean;
  };

  /** user_group */
  user_group?: string;
}

export interface MUUserModelUpdatePasswordV1 {
  /**
   * password
   * @format password
   */
  password?: string;
}

export interface MUUserModelRegisterV1 {
  /** username */
  username?: string;

  /** email */
  email?: string;

  /**
   * password
   * @format password
   */
  password?: string;
}

export interface MUUserGenreHighlightModelV1 {
  /** genre_id */
  genre_id?: number;

  /** genre_name */
  genre_name?: string;

  /** color */
  color?: string;
}

export interface MUUserGenreHighlightModelUpdateV1 {
  /** color */
  color?: string;
}

export interface MUUserSubscribedTopicModelV1 {
  /** topic_id */
  topic_id?: number;
  topic?: MUForumTopicModelSearchV1;
  time_subscribed_since?: MUTimeV1;
}

export interface MUUserSearchRequestV1 {
  /** search */
  search?: string;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** orderby */
  orderby?:
    | "username"
    | "time_added"
    | "forum_posts"
    | "added_authors"
    | "added_releases"
    | "added_groups"
    | "added_publishers"
    | "added_series";

  /** asc */
  asc?: "asc" | "desc";
}

export interface MUUserGroupFilterModelV1 {
  /** group_id */
  group_id?: number;

  /** group_name */
  group_name?: string;
}

export interface MUUserChangeRequestSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUUserChangeRequestModelV1 }[];
}

export interface MUAboutusCategoryReorderModelV1 {
  /** category_id */
  category_id: number;

  /** position */
  position?: number;

  /** users */
  users?: MUAboutusUserReorderModelV1[];
}

export interface MUAboutusDescriptionModelV1 {
  /** description */
  description?: string;
}

export interface MUAboutusCategoryModelV1 {
  /** category_id */
  category_id: number;

  /** position */
  position?: number;

  /** title */
  title?: string;

  /** users */
  users?: MUAboutusUserModelV1[];
}

export interface MUAboutusCategoryModelUpdateV1 {
  /** title */
  title?: string;
}

export interface MUAboutusUserReorderModelV1 {
  /** entry_id */
  entry_id: number;

  /** position */
  position?: number;
}

export interface MUAboutusUserModelV1 {
  /** entry_id */
  entry_id: number;

  /** position */
  position?: number;

  /** username */
  username?: string;

  /** user_id */
  user_id?: number;
}

export interface MUAboutusUserModelUpdateV1 {
  /** username */
  username?: string;
}

export interface MUForumAdminHistorySearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUForumAdminHistoryModelV1 }[];
}

export interface MUForumPostModelV1 {
  /** post_id */
  post_id?: number;

  /** body */
  body?: string;

  /** ForumPostModelV1Topic */
  topic?: { forum_id?: number; topic_id?: number; topic?: string };
  author?: MUUserModelSearchV1;

  /** ForumPostModelV1ReplyTo */
  reply_to?: { post_id?: number; post_author?: { author_id?: number; author_name?: string } };

  /** ForumPostModelV1LastEdit */
  last_edit?: { by?: string; time?: MUTimeV1 };
  time_added?: MUTimeV1;
}

export interface MUForumPostModelSearchV1 {
  /** post_id */
  post_id?: number;

  /** body_excerpt */
  body_excerpt?: string;

  /** ForumPostModelSearchV1Topic */
  topic?: { forum_id?: number; topic_id?: number; topic?: string };
  author?: MUUserModelSearchV1;
  time_added?: MUTimeV1;
}

export interface MUForumPostModelUpdateV1 {
  /** body */
  body?: string;

  /** reply_to */
  reply_to?: number;
}

export interface MUForumTopicModelV1 {
  /** topic_id */
  topic_id?: number;

  /** topic */
  topic?: string;

  /** url */
  url?: string;
  last_post?: MUForumPostModelSearchV1;

  /** ForumTopicModelV1Stats */
  stats?: { posts?: number; views?: number };

  /** ForumTopicModelV1Forum */
  forum?: { forum_id?: number; forum_name?: string };

  /** is_poll */
  is_poll?: boolean;
  poll?: MUForumPollModelV1;

  /** ForumTopicModelV1Admin */
  admin?: { pinned?: boolean; locked?: boolean; global?: boolean };
  topic_starter?: MUUserModelSearchV1;
  time_added?: MUTimeV1;
}

export interface MUForumTopicModelSearchV1 {
  /** topic_id */
  topic_id?: number;

  /** topic */
  topic?: string;

  /** url */
  url?: string;
  last_post?: MUForumPostModelSearchV1;

  /** ForumTopicModelSearchV1Stats */
  stats?: { posts?: number; views?: number };

  /** ForumTopicModelSearchV1Forum */
  forum?: { forum_id?: number; forum_name?: string };

  /** is_poll */
  is_poll?: boolean;

  /** ForumTopicModelSearchV1Admin */
  admin?: { pinned?: boolean; locked?: boolean; global?: boolean };
  topic_starter?: MUUserModelSearchV1;
  time_added?: MUTimeV1;
}

export interface MUForumTopicModelUpdateV1 {
  /** topic */
  topic?: string;

  /** ForumTopicModelUpdateV1Forum */
  forum?: { forum_id?: number };

  /** ForumTopicModelUpdateV1Admin */
  admin?: { pinned?: boolean; locked?: boolean; global?: boolean };
}

export interface MUForumTopicModelAddV1 {
  topic?: MUForumTopicModelUpdateV1;
  post?: MUForumPostModelUpdateV1;
  poll?: MUForumPollModelUpdateV1;
}

export interface MUForumSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** topic_results */
  topic_results?: {
    record?: MUForumTopicModelSearchV1;
    metadata?: { is_subscribed?: boolean; my_latest_post_in_topic?: number };
  }[];

  /** post_results */
  post_results?: {
    record?: MUForumPostModelSearchV1;
    metadata?: {
      is_subscribed?: boolean;
      my_latest_post_in_topic?: number;
      forum_info?: { forum_id?: number; forum_name?: string };
      topic_stats?: { posts?: number; views?: number };
    };
  }[];
}

export interface MUForumPollModelV1 {
  /** question */
  question?: string;

  /** answers */
  answers?: MUForumPollAnswerModelV1[];

  /** votes */
  votes?: number;

  /** ForumPollModelV1Admin */
  admin?: { image_poll?: boolean };
}

export interface MUForumPollModelUpdateV1 {
  /** question */
  question?: string;

  /** answers */
  answers?: MUForumPollAnswerModelUpdateV1[];
}

export interface MUForumPollTempImageModelV1 {
  /** image_id */
  image_id?: number;

  /** caption */
  caption?: string;

  /** ForumPollTempImageModelV1Url */
  url?: { original?: string; thumb?: string };

  /** height */
  height?: number;

  /** width */
  width?: number;
  time_added?: MUTimeV1;
}

export interface MUForumPostByUserResponseV1 {
  /** topic_id */
  topic_id?: number;

  /** post_id_list */
  post_id_list?: number[];
}

export interface MUForumAdminModelV1 {
  user?: MUUserModelSearchV1;

  /** user_id */
  user_id?: number;
}

export interface MUForumAdminModelUpdateV1 {
  /** user_id */
  user_id?: number;
}

export interface MUForumAdminHistoryModelV1 {
  user?: MUUserModelSearchV1;
  action_time?: MUTimeV1;

  /** action */
  action?: string;
}

export interface MUForumTopicListResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUForumTopicModelSearchV1; metadata?: { first_post?: MUForumPostModelV1 } }[];
}

export interface MUForumCategoryModelV1 {
  /** category_id */
  category_id?: number;

  /** name */
  name?: string;

  /** position */
  position?: number;
}

export interface MUForumCategoryModelListV1 {
  /** category_id */
  category_id?: number;

  /** name */
  name?: string;

  /** forums */
  forums?: { forum?: MUForumForumModelListV1 }[];
}

export interface MUForumCategoryModelUpdateV1 {
  /** name */
  name?: string;

  /** position */
  position?: number;
}

export interface MUForumWarnModelV1 {
  /** user_id */
  user_id?: number;
  time_added?: MUTimeV1;

  /** level */
  level: number;

  /** reason */
  reason: string;

  /** send_reason */
  send_reason?: boolean;
  by_user?: MUUserModelSearchV1;
}

export interface MUForumWarnModelPublicV1 {
  time_added?: MUTimeV1;

  /** level */
  level: number;
}

export interface MUForumWarnModelUpdateV1 {
  /** level */
  level: number;

  /** reason */
  reason: string;

  /** send_reason */
  send_reason?: boolean;
}

export interface MUForumForumModelV1 {
  /** forum_id */
  forum_id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** description */
  description?: string;

  /** position */
  position?: number;

  /** ForumForumModelV1Category */
  category?: { category_id?: number; category_name?: string };

  /** moderators */
  moderators?: MUForumAdminModelV1[];
  series?: MUSeriesModelSearchV1;

  /** ForumForumModelV1Stats */
  stats?: { topics?: number; posts?: number };
  last_topic?: MUForumTopicModelSearchV1;

  /** ForumForumModelV1Admin */
  admin?: { locked?: boolean; hidden?: boolean; verify_age?: boolean };
}

export interface MUForumForumModelListV1 {
  /** forum_id */
  forum_id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** description */
  description?: string;

  /** position */
  position?: number;

  /** moderators */
  moderators?: MUForumAdminModelV1[];
  series?: MUSeriesModelSearchV1;

  /** ForumForumModelListV1Stats */
  stats?: { topics?: number; posts?: number };
  last_topic?: MUForumTopicModelSearchV1;

  /** ForumForumModelListV1Admin */
  admin?: { locked?: boolean; hidden?: boolean; verify_age?: boolean };
}

export interface MUForumForumModelUpdateV1 {
  /** name */
  name?: string;

  /** description */
  description?: string;

  /** position */
  position?: number;

  /** ForumForumModelUpdateV1Admin */
  admin?: { locked?: boolean; hidden?: boolean; verify_age?: boolean };
}

export interface MUForumSearchRequestV1 {
  /** search_by */
  search_by?: "post" | "topic";

  /** method */
  method?: "fulltext" | "exact";

  /** search */
  search?: string;

  /** since */
  since?: number;

  /** after_id */
  after_id?: number;

  /** before_id */
  before_id?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** by_user_id */
  by_user_id?: number;

  /** filter_user_id */
  filter_user_id?: number;
}

export interface MUForumPostListResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: {
    record?: MUForumPostModelV1;
    metadata?: {
      user_warn?: MUForumWarnModelPublicV1;
      reported?: boolean;
      is_moderator?: boolean;
      is_forum_admin?: boolean;
    };
  }[];
}

export interface MUForumAdminHistorySearchRequestV1 {
  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** uid */
  uid?: number;
}

export interface MUForumLookupResponseV1 {
  /** topic_id */
  topic_id?: number;

  /** forum_id */
  forum_id?: number;
}

export interface MUForumPollAnswerModelV1 {
  /** answer_id */
  answer_id: number;

  /** answer */
  answer: string;

  /** votes */
  votes?: number;

  /** ForumPollAnswerModelV1Image */
  image?: { height?: number; width?: number; filename?: string };
}

export interface MUForumPollAnswerModelUpdateV1 {
  /** answer_id */
  answer_id: number;

  /** answer */
  answer: string;

  /** temp_image_id */
  temp_image_id?: number;
}

export interface MUForumPollVoteModelV1 {
  /** choice_id */
  choice_id?: number;
}

export interface MUForumTopicListRequestV1 {
  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** orderby */
  orderby?: "last_post_date" | "topic_start_date";
}

export interface MUForumPostReportModelV1 {
  /** report_id */
  report_id?: number;

  /** topic_id */
  topic_id?: number;
  topic?: MUForumTopicModelSearchV1;

  /** post_id */
  post_id?: number;
  post?: MUForumPostModelSearchV1;

  /** user_id */
  user_id?: number;
  user?: MUUserModelSearchV1;

  /** reason */
  reason?: string;
}

export interface MUForumPostReportModelUpdateV1 {
  /** reason */
  reason?: string;
}

export interface MUAccountLoginModelV1 {
  /** username */
  username?: string;

  /**
   * password
   * @format password
   */
  password?: string;
}

export interface MUAccountForgotPassModelV1 {
  /** email */
  email?: string;
}

export interface MUGroupsSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUGroupsModelSearchV1; hit_name?: string }[];
}

export interface MUGroupsSearchRequestV1 {
  /** search */
  search?: string;

  /** added_by */
  added_by?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** active */
  active?: boolean;

  /** pending */
  pending?: boolean;
}

export interface MUGroupsSeriesListResponseV1 {
  /** release_frequency */
  release_frequency?: string;

  /** series_titles */
  series_titles?: { title?: string; series_id?: number; last_updated?: MUTimeV1 }[];

  /** series_genres */
  series_genres?: { genre?: string; count?: number }[];

  /** series_categories */
  series_categories?: { category?: string; votes?: number }[];
}

export interface MUGroupsModelV1 {
  /** group_id */
  group_id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** associated */
  associated?: { name?: string }[];

  /** GroupsModelV1Social */
  social?: {
    site?: string;
    facebook?: string;
    twitter?: string;
    irc?: { channel?: string; server?: string };
    forum?: string;
    discord?: string;
  };

  /** active */
  active?: boolean;

  /** notes */
  notes?: string;
  added_by?: MUUserModelSearchV1;

  /** GroupsModelV1Admin */
  admin?: { approved?: boolean; hold?: boolean };
}

export interface MUGroupsModelSearchV1 {
  /** group_id */
  group_id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** GroupsModelSearchV1Social */
  social?: {
    site?: string;
    facebook?: string;
    twitter?: string;
    irc?: { channel?: string; server?: string };
    forum?: string;
    discord?: string;
  };

  /** active */
  active?: boolean;

  /** notes */
  notes?: string;
  added_by?: MUUserModelSearchV1;
}

export interface MUGroupsModelUpdateV1 {
  /** name */
  name?: string;

  /** associated */
  associated?: { name?: string }[];

  /** GroupsModelUpdateV1Social */
  social?: {
    site?: string;
    facebook?: string;
    twitter?: string;
    irc?: { channel?: string; server?: string };
    forum?: string;
    discord?: string;
  };

  /** active */
  active?: boolean;

  /** notes */
  notes?: string;

  /** GroupsModelUpdateV1Admin */
  admin?: { approved?: boolean; hold?: boolean };
}

export interface MUSeriesCommentSearchRequestV1 {
  /** method */
  method?: "useful" | "time_added";

  /** added_by */
  added_by?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUSeriesHistoryModelV1 {
  /** change_id */
  change_id?: number;

  /** username */
  username?: string;

  /** action */
  action?: string;

  /** changed */
  changed?: string;
  time_added?: MUTimeV1;
}

export interface MUSeriesSearchRequestV1 {
  /** search */
  search?: string;

  /** added_by */
  added_by?: number;

  /** stype */
  stype?: "title" | "description";

  /** licensed */
  licensed?: "yes" | "no";

  /** type */
  type?: string[];

  /** year */
  year?: string;

  /** filter_types */
  filter_types?: string[];

  /** category */
  category?: string[];

  /** filter */
  filter?: "scanlated" | "completed" | "oneshots" | "no_oneshots" | "some_releases" | "no_releases";

  /** list */
  list?: string;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** genre */
  genre?: string[];

  /** exclude_genre */
  exclude_genre?: string[];

  /** orderby */
  orderby?:
    | "score"
    | "title"
    | "rank"
    | "rating"
    | "year"
    | "date_added"
    | "week_pos"
    | "month1_pos"
    | "month3_pos"
    | "month6_pos"
    | "year_pos"
    | "list_reading"
    | "list_wish"
    | "list_complete"
    | "list_unfinished";

  /** pending */
  pending?: boolean;

  /** include_rank_metadata */
  include_rank_metadata?: boolean;

  /** exclude_filtered_genres */
  exclude_filtered_genres?: boolean;
}

export interface MUSeriesCommentUsefulModelV1 {
  /** useful */
  useful?: boolean;
}

export interface MUSeriesRatingRainbowModelV1 {
  /** average_rating */
  average_rating?: number;

  /** rainbow */
  rainbow?: { rating?: number; count?: number }[];
}

export interface MUSeriesCommentSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: {
    record?: MUSeriesCommentModelV1;
    metadata?: { author_series_rating?: number; current_user_useful_rating?: boolean };
  }[];
}

export interface MUSeriesSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: {
    record?: MUSeriesModelSearchV1;
    hit_title?: string;
    metadata?: { user_list?: MUListsSeriesModelV1; user_genre_highlights?: { genre?: string; color?: string }[] };
  }[];
}

export interface MUSeriesRatingModelV1 {
  /** rating */
  rating: number;
  last_updated?: MUTimeV1;
}

export interface MUSeriesCommentReportModelV1 {
  /** report_reason */
  report_reason?: string;
}

export interface MUSeriesGroupListResponseV1 {
  /** group_list */
  group_list?: MUGroupsModelSearchV1[];

  /** release_list */
  release_list?: MUReleaseModelSearchV1[];
}

export interface MUSeriesCommentModerationResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: {
    record?: MUSeriesCommentModelV1;
    metadata?: { series?: MUSeriesModelSearchV1; author_series_rating?: number };
  }[];
}

export interface MUSeriesRecommendationsModelV1 {
  /** series_name */
  series_name?: string;

  /** series_id */
  series_id?: number;

  /** weight */
  weight?: number;
}

export interface MUSeriesCategoryVoteModelV1 {
  /** category */
  category?: string;

  /** agree */
  agree?: boolean;
}

export interface MUSeriesCategoryVoteDeleteModelV1 {
  /** category */
  category?: string;
}

export interface MUSeriesCommentModelV1 {
  /** id */
  id?: number;

  /** series_id */
  series_id?: number;

  /** subject */
  subject?: string;

  /** content */
  content?: string;

  /** SeriesCommentModelV1Author */
  author?: { user_info?: MUUserModelSearchV1; name?: string };

  /** useful */
  useful?: number;
  time_added?: MUTimeV1;
  time_updated?: MUTimeV1;

  /** SeriesCommentModelV1Admin */
  admin?: { moderated?: boolean; reported?: boolean; report_reason?: string };
}

export interface MUSeriesCommentModelUpdateV1 {
  /** subject */
  subject?: string;

  /** content */
  content?: string;

  /** SeriesCommentModelUpdateV1Admin */
  admin?: { moderated?: boolean; reported?: boolean };
}

export interface MUSeriesCategoryUpdateModelV1 {
  from?: MUCategoriesModelUpdateV1;
  to?: MUCategoriesModelUpdateV1;
}

export interface MUSeriesModelV1 {
  /** series_id */
  series_id?: number;

  /** title */
  title?: string;

  /** url */
  url?: string;

  /** associated */
  associated?: { title?: string }[];

  /** description */
  description?: string;
  image?: MUImageModelV1;

  /** type */
  type?:
    | "Artbook"
    | "Doujinshi"
    | "Drama CD"
    | "Filipino"
    | "Indonesian"
    | "Manga"
    | "Manhwa"
    | "Manhua"
    | "Novel"
    | "OEL"
    | "Thai"
    | "Vietnamese"
    | "Malaysian"
    | "Nordic"
    | "French"
    | "Spanish";

  /** year */
  year?: string;

  /** bayesian_rating */
  bayesian_rating?: number;

  /** rating_votes */
  rating_votes?: number;

  /** genres */
  genres?: { genre?: string }[];

  /** categories */
  categories?: MUCategoriesModelV1[];

  /** latest_chapter */
  latest_chapter?: number;

  /** forum_id */
  forum_id?: number;

  /** status */
  status?: string;

  /** licensed */
  licensed?: boolean;

  /** completed */
  completed?: boolean;

  /** SeriesModelV1Anime */
  anime?: { start?: string; end?: string };

  /** related_series */
  related_series?: {
    relation_id?: number;
    relation_type: "Prequel" | "Sequel" | "Side Story" | "Spin-Off" | "Adapted From" | "Alternate Story" | "Main Story";
    related_series_id: number;
    related_series_name?: string;
    triggered_by_relation_id?: number;
  }[];

  /** authors */
  authors?: { name?: string; author_id?: number; type?: "Author" | "Artist" }[];

  /** publishers */
  publishers?: { publisher_name?: string; publisher_id?: number; type?: "Original" | "English"; notes?: string }[];

  /** publications */
  publications?: { publication_name?: string; publisher_name?: string; publisher_id?: string }[];

  /** recommendations */
  recommendations?: MUSeriesRecommendationsModelV1[];

  /** category_recommendations */
  category_recommendations?: MUSeriesRecommendationsModelV1[];

  /** SeriesModelV1Rank */
  rank?: {
    position?: { week?: number; month?: number; three_months?: number; six_months?: number; year?: number };
    old_position?: { week?: number; month?: number; three_months?: number; six_months?: number; year?: number };
    lists?: { reading?: number; wish?: number; complete?: number; unfinished?: number; custom?: number };
  };
  last_updated?: MUTimeV1;

  /** SeriesModelV1Admin */
  admin?: { added_by?: MUUserModelSearchV1; approved?: boolean };
}

export interface MUSeriesModelSearchV1 {
  /** series_id */
  series_id?: number;

  /** title */
  title?: string;

  /** url */
  url?: string;

  /** description */
  description?: string;
  image?: MUImageModelV1;

  /** type */
  type?:
    | "Artbook"
    | "Doujinshi"
    | "Drama CD"
    | "Filipino"
    | "Indonesian"
    | "Manga"
    | "Manhwa"
    | "Manhua"
    | "Novel"
    | "OEL"
    | "Thai"
    | "Vietnamese"
    | "Malaysian"
    | "Nordic"
    | "French"
    | "Spanish";

  /** year */
  year?: string;

  /** bayesian_rating */
  bayesian_rating?: number;

  /** rating_votes */
  rating_votes?: number;

  /** genres */
  genres?: { genre?: string }[];

  /** latest_chapter */
  latest_chapter?: number;

  /** SeriesModelSearchV1Rank */
  rank?: {
    position?: { week?: number; month?: number; three_months?: number; six_months?: number; year?: number };
    old_position?: { week?: number; month?: number; three_months?: number; six_months?: number; year?: number };
    lists?: { reading?: number; wish?: number; complete?: number; unfinished?: number; custom?: number };
  };
  last_updated?: MUTimeV1;

  /** SeriesModelSearchV1Admin */
  admin?: { added_by?: MUUserModelSearchV1; approved?: boolean };
}

export interface MUSeriesModelUpdateV1 {
  /** title */
  title?: string;

  /** associated */
  associated?: { title?: string }[];

  /** description */
  description?: string;

  /** type */
  type?:
    | "Artbook"
    | "Doujinshi"
    | "Drama CD"
    | "Filipino"
    | "Indonesian"
    | "Manga"
    | "Manhwa"
    | "Manhua"
    | "Novel"
    | "OEL"
    | "Thai"
    | "Vietnamese"
    | "Malaysian"
    | "Nordic"
    | "French"
    | "Spanish";

  /** year */
  year?: string;

  /** genres */
  genres?: { genre?: string }[];

  /** categories */
  categories?: MUCategoriesModelUpdateV1[];

  /** status */
  status?: string;

  /** licensed */
  licensed?: boolean;

  /** completed */
  completed?: boolean;

  /** SeriesModelUpdateV1Anime */
  anime?: { start?: string; end?: string };

  /** related_series */
  related_series?: {
    relation_type: "Prequel" | "Sequel" | "Side Story" | "Spin-Off" | "Adapted From" | "Alternate Story" | "Main Story";
    related_series_id: number;
  }[];

  /** authors */
  authors?: { name?: string; type?: "Author" | "Artist" }[];

  /** publishers */
  publishers?: { publisher_name?: string; type?: "Original" | "English"; notes?: string }[];

  /** publications */
  publications?: { publication_name?: string; publisher_name?: string }[];

  /** SeriesModelUpdateV1Admin */
  admin?: { approved?: boolean };
}

export interface MUSeriesLockModelV1 {
  /** field */
  field?: string;

  /** reason */
  reason?: string;

  /** user_id */
  user_id?: number;

  /** username */
  username?: string;
  time_locked?: MUTimeV1;
}

export interface MUSeriesLockModelUpdateV1 {
  /** reason */
  reason?: string;
}

export interface MUSeriesHistorySearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** series_title */
  series_title?: string;

  /** results */
  results?: { record?: MUSeriesHistoryModelV1 }[];
}

export interface MUPublishersSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUPublishersModelSearchV1; hit_name?: string }[];
}

export interface MUPublishersSeriesListResponseV1 {
  /** series_list */
  series_list?: { title?: string; series_id?: number; year?: string; last_updated?: MUTimeV1 }[];

  /** publication_list */
  publication_list?: { publication_name?: string; count?: number }[];
}

export interface MUPublishersModelV1 {
  /** publisher_id */
  publisher_id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** associated */
  associated?: { name?: string }[];

  /** type */
  type?:
    | "N/A"
    | "Japanese"
    | "English"
    | "Korean"
    | "Taiwanese"
    | "Chinese"
    | "Thai"
    | "Indonesian"
    | "Filipino"
    | "Vietnamese"
    | "Malaysian"
    | "Nordic"
    | "French"
    | "Spanish";

  /** info */
  info?: string;

  /** site */
  site?: string;

  /** PublishersModelV1Stats */
  stats?: { total_series?: number; total_publications?: number };
  added_by?: MUUserModelSearchV1;
  last_updated?: MUTimeV1;

  /** PublishersModelV1Admin */
  admin?: { approved?: boolean };
}

export interface MUPublishersModelSearchV1 {
  /** publisher_id */
  publisher_id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** type */
  type?:
    | "N/A"
    | "Japanese"
    | "English"
    | "Korean"
    | "Taiwanese"
    | "Chinese"
    | "Thai"
    | "Indonesian"
    | "Filipino"
    | "Vietnamese"
    | "Malaysian"
    | "Nordic"
    | "French"
    | "Spanish";

  /** PublishersModelSearchV1Stats */
  stats?: { total_series?: number; total_publications?: number };
  added_by?: MUUserModelSearchV1;
}

export interface MUPublishersModelUpdateV1 {
  /** name */
  name?: string;

  /** associated */
  associated?: { name?: string }[];

  /** type */
  type?:
    | "N/A"
    | "Japanese"
    | "English"
    | "Korean"
    | "Taiwanese"
    | "Chinese"
    | "Thai"
    | "Indonesian"
    | "Filipino"
    | "Vietnamese"
    | "Malaysian"
    | "Nordic"
    | "French"
    | "Spanish";

  /** info */
  info?: string;

  /** site */
  site?: string;

  /** PublishersModelUpdateV1Admin */
  admin?: { approved?: boolean };
}

export interface MUPublishersPublicationResponseV1 {
  /** PublishersPublicationResponseV1Publisher */
  publisher?: { publisher_name?: string; publisher_id?: number };

  /** series_list */
  series_list?: { title?: string; series_id?: number; genres?: string[]; last_updated?: MUTimeV1 }[];
}

export interface MUPublishersSearchRequestV1 {
  /** search */
  search?: string;

  /** added_by */
  added_by?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** orderby */
  orderby?: "score" | "name" | "series" | "publications" | "type";

  /** pending */
  pending?: boolean;
}

export interface MUBirthdayModelV1 {
  /** month */
  month?: number;

  /** day */
  day?: number;

  /** year */
  year?: number;

  /** as_string */
  as_string?: string;

  /** zodiac */
  zodiac?: string;
}

export interface MUPerPageSearchRequestV1 {
  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUPollVoteStatusModelV1 {
  /** voted */
  voted?: boolean;
}

export interface MUPollModelV1 {
  /** active */
  active?: boolean;

  /** question */
  question?: string;

  /** answers */
  answers?: { answer_id?: number; answer?: string; total?: number }[];

  /** total_votes */
  total_votes?: number;
}

export interface MUPollModelUpdateV1 {
  /** question */
  question?: string;

  /** answers */
  answers?: { answer?: string }[];
}

export interface MUListsSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;
  list?: MUListsModelV1;

  /** results */
  results?: { record?: MUListsSeriesModelV1; metadata?: { series?: MUSeriesModelSearchV1; user_rating?: number } }[];
}

export interface MUListsSeriesModelV1 {
  /** ListsSeriesModelV1Series */
  series: { id: number; title?: string };

  /** list_id */
  list_id?: number;

  /** list_type */
  list_type?: string;

  /** list_icon */
  list_icon?: string;

  /** ListsSeriesModelV1Status */
  status?: { volume?: number; chapter?: number };

  /** priority */
  priority?: number;
  time_added?: MUTimeV1;
}

export interface MUListsSeriesModelUpdateV1 {
  /** ListsSeriesModelUpdateV1Series */
  series: { id: number; title?: string };

  /** list_id */
  list_id?: number;

  /** ListsSeriesModelUpdateV1Status */
  status?: { volume?: number; chapter?: number; increment_volume?: number; increment_chapter?: number };

  /** priority */
  priority?: number;
}

export interface MUListsPublicStatsModelV1 {
  /** genres */
  genres?: { genre_name?: string; count?: number }[];
}

export interface MUListsBulkAddModelV1 {
  /** priority */
  priority?: "High" | "Low";

  /** series_title */
  series_title?: string;
}

export interface MUListsPublicSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;
  list?: MUListsModelV1;

  /** results */
  results?: {
    series_id?: number;
    series_title?: string;
    volume?: number;
    chapter?: number;
    metadata?: {
      user_rating?: number;
      user_comment?: { comment_id?: number; comment_preview?: string };
      user_list?: MUListsSeriesModelV1;
    };
  }[];
}

export interface MUListsSimilarUsersResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** users */
  users?: {
    user_id?: number;
    user_name?: string;
    user_rating?: number;
    intersect_count?: number;
    percent_match?: number;
  }[];
}

export interface MUListsModelV1 {
  /** list_id */
  list_id?: number;

  /** title */
  title?: string;

  /** description */
  description?: string;

  /** type */
  type?: "read" | "wish" | "complete" | "unfinished" | "hold";

  /** icon */
  icon?: string;

  /** custom */
  custom?: boolean;

  /** ListsModelV1Options */
  options?: {
    public?: boolean;
    sort?: "title" | "priority" | "date" | "rating" | "release" | "unread" | "userrating";
    show_rating?: boolean;
    show_status?: boolean;
    show_comment?: "link" | "text" | "none";
    show_per_page?: number;
    show_latest_chapter?: boolean;
  };
}

export interface MUListsModelUpdateV1 {
  /** title */
  title?: string;

  /** description */
  description?: string;

  /** type */
  type?: "read" | "wish" | "complete" | "unfinished" | "hold";

  /** icon */
  icon?: string;

  /** ListsModelUpdateV1Options */
  options?: {
    public?: boolean;
    sort?: "title" | "priority" | "date" | "rating" | "release" | "unread" | "userrating";
    show_rating?: boolean;
    show_status?: boolean;
    show_comment?: "link" | "text" | "none";
    show_per_page?: number;
    show_latest_chapter?: boolean;
  };
}

export interface MUListsSearchRequestV1 {
  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUReviewCommentModelV1 {
  /** id */
  id?: number;

  /** review_id */
  review_id?: number;

  /** subject */
  subject?: string;

  /** content */
  content?: string;

  /** ReviewCommentModelV1Author */
  author?: { user_id?: number; name?: string };

  /** rating */
  rating?: number;
  time_added?: MUTimeV1;
  time_updated?: MUTimeV1;
}

export interface MUReviewCommentModelUpdateV1 {
  /** subject */
  subject?: string;

  /** content */
  content?: string;

  /** rating */
  rating?: number;

  /** ReviewCommentModelUpdateV1Admin */
  admin?: { approved?: boolean };
}

export interface MUReviewModelV1 {
  /** id */
  id?: number;

  /** title */
  title?: string;

  /** body */
  body?: string;

  /** ReviewModelV1Author */
  author?: { user_id?: number; name?: string };
  series?: MUSeriesModelSearchV1;

  /** ReviewModelV1Review */
  review?: { user?: number; plot?: number; drawing?: number; characters?: number; enjoy?: number; overall?: number };
  time_added?: MUTimeV1;
}

export interface MUReviewModelSearchV1 {
  /** id */
  id?: number;

  /** title */
  title?: string;

  /** body_excerpt */
  body_excerpt?: string;

  /** ReviewModelSearchV1Author */
  author?: { user_id?: number; name?: string };
  series?: MUSeriesModelSearchV1;

  /** ReviewModelSearchV1Review */
  review?: { plot?: number; drawing?: number; characters?: number; enjoy?: number; overall?: number };
  time_added?: MUTimeV1;
}

export interface MUReviewModelUpdateV1 {
  /** title */
  title?: string;

  /** body */
  body?: string;

  /** series_title */
  series_title?: string;

  /** ReviewModelUpdateV1Review */
  review?: { plot?: number; drawing?: number; characters?: number; enjoy?: number; overall?: number };

  /** ReviewModelUpdateV1Admin */
  admin?: { approved?: boolean; moderated?: boolean };
}

export interface MUReviewCommentSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUReviewCommentModelV1 }[];
}

export interface MUReviewCommentSearchRequestV1 {
  /** added_by */
  added_by?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUReviewSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUReviewModelSearchV1 }[];
}

export interface MUReviewSearchRequestV1 {
  /** search */
  search?: string;

  /** added_by */
  added_by?: number;

  /** series_id */
  series_id?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** pending */
  pending?: boolean;
}

export interface MUAuthorsModelV1 {
  /** id */
  id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** associated */
  associated?: { name?: string }[];
  image?: MUImageModelV1;

  /** actualname */
  actualname?: string;
  birthday?: MUBirthdayModelV1;

  /** birthplace */
  birthplace?: string;

  /** bloodtype */
  bloodtype?: "N/A" | "A" | "B" | "AB" | "O";

  /** gender */
  gender?: "N/A" | "Male" | "Female";

  /** genres */
  genres?: string[];

  /** AuthorsModelV1Stats */
  stats?: { total_series?: number };

  /** AuthorsModelV1Social */
  social?: { officialsite?: string; facebook?: string; twitter?: string };

  /** comments */
  comments?: string;
  last_updated?: MUTimeV1;
  added_by?: MUUserModelSearchV1;

  /** AuthorsModelV1Admin */
  admin?: { approved?: boolean };
}

export interface MUAuthorsModelUpdateV1 {
  /** name */
  name?: string;

  /** associated */
  associated?: { name?: string }[];

  /** actualname */
  actualname?: string;
  birthday?: MUBirthdayModelV1;

  /** birthplace */
  birthplace?: string;

  /** bloodtype */
  bloodtype?: "N/A" | "A" | "B" | "AB" | "O";

  /** gender */
  gender?: "N/A" | "Male" | "Female";

  /** AuthorsModelUpdateV1Social */
  social?: { officialsite?: string; facebook?: string; twitter?: string };

  /** comments */
  comments?: string;

  /** AuthorsModelUpdateV1Admin */
  admin?: { approved?: boolean };
}

export interface MUAuthorsModelSearchV1 {
  /** id */
  id?: number;

  /** name */
  name?: string;

  /** url */
  url?: string;

  /** genres */
  genres?: string[];

  /** AuthorsModelSearchV1Stats */
  stats?: { total_series?: number };
  added_by?: MUUserModelSearchV1;
}

export interface MUAuthorsSeriesListResponseV1 {
  /** total_series */
  total_series?: number;

  /** series_list */
  series_list?: {
    title?: string;
    series_id?: number;
    year?: string;
    last_updated?: MUTimeV1;
    genres?: string[];
    metadata?: { user_list?: MUListsSeriesModelV1 };
  }[];

  /** genre_list */
  genre_list?: { genre?: string; count?: number }[];
}

export interface MUAuthorsSearchRequestV1 {
  /** search */
  search?: string;

  /** added_by */
  added_by?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** genre */
  genre?: string[];

  /** orderby */
  orderby?: "name" | "series" | "score";

  /** pending */
  pending?: boolean;
}

export interface MUAuthorsSeriesListRequestV1 {
  /** orderby */
  orderby?: "title" | "year";
}

export interface MUAuthorsSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUAuthorsModelSearchV1; hit_name?: string; hit_genre?: string[] }[];
}

export interface MUAuthorsLockModelV1 {
  /** field */
  field?: string;

  /** reason */
  reason?: string;

  /** user_id */
  user_id?: number;

  /** username */
  username?: string;
  time_locked?: MUTimeV1;
}

export interface MUAuthorsLockModelUpdateV1 {
  /** reason */
  reason?: string;
}

export interface MUAvatarModelV1 {
  /** id */
  id?: number;

  /** url */
  url?: string;

  /** title */
  title?: string;

  /** extension */
  extension?: string;

  /** height */
  height?: number;

  /** width */
  width?: number;
}

export interface MUAvatarModelSearchV1 {
  /** id */
  id?: number;

  /** url */
  url?: string;

  /** height */
  height?: number;

  /** width */
  width?: number;
}

export interface MUAvatarModelUpdateV1 {
  /** title */
  title?: string;
}

export interface MUImageModelV1 {
  /** ImageModelV1Url */
  url?: { original?: string; thumb?: string };

  /** height */
  height?: number;

  /** width */
  width?: number;
}

export interface MUCategoriesSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUCategoriesModelSearchV1 }[];
}

export interface MUCategoriesModelSearchV1 {
  /** category */
  category?: string;

  /** usage */
  usage?: number;

  /** votes */
  votes?: number;

  /** votes_plus */
  votes_plus?: number;

  /** votes_minus */
  votes_minus?: number;
}

export interface MUCategoriesSearchRequestV1 {
  /** search */
  search?: string;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** orderby */
  orderby?: "category" | "agree" | "disagree" | "usage";
}

export interface MUCategoriesModelV1 {
  /** series_id */
  series_id?: number;

  /** category */
  category?: string;

  /** votes */
  votes?: number;

  /** votes_plus */
  votes_plus?: number;

  /** votes_minus */
  votes_minus?: number;

  /** added_by */
  added_by?: number;
}

export interface MUCategoriesModelUpdateV1 {
  /** category */
  category?: string;
}

export interface MUApiResponseV1 {
  status: string;
  reason: string;
  context?: object;
}

export interface MUFaqCategoryModelV1 {
  /** category_id */
  category_id: number;

  /** title */
  title?: string;

  /** position */
  position?: number;
}

export interface MUFaqCategoryQuestionsModelV1 {
  /** category_id */
  category_id: number;

  /** title */
  title?: string;

  /** questions */
  questions?: MUFaqQuestionOnlyModelV1[];

  /** position */
  position?: number;
}

export interface MUFaqCategoryModelUpdateV1 {
  /** title */
  title?: string;
}

export interface MUFaqQuestionModelV1 {
  /** question_id */
  question_id: number;

  /** question */
  question?: string;

  /** answer */
  answer?: string;

  /** position */
  position?: number;
}

export interface MUFaqQuestionOnlyModelV1 {
  /** question_id */
  question_id: number;

  /** question */
  question?: string;

  /** position */
  position?: number;
}

export interface MUFaqQuestionModelUpdateV1 {
  /** question */
  question?: string;

  /** answer */
  answer?: string;
}

export interface MUFaqQuestionReorderModelV1 {
  /** question_id */
  question_id: number;

  /** position */
  position?: number;
}

export interface MUFaqCategoryReorderModelV1 {
  /** category_id */
  category_id: number;

  /** position */
  position?: number;

  /** questions */
  questions?: MUFaqQuestionReorderModelV1[];
}

export interface MUReleaseModelV1 {
  /** id */
  id?: number;

  /** title */
  title?: string;

  /** volume */
  volume?: string;

  /** chapter */
  chapter?: string;

  /** groups */
  groups?: { name?: string; group_id?: number }[];

  /** release_date */
  release_date?: string;

  /** download_notes */
  download_notes?: string;

  /** comment */
  comment?: string;
  time_added?: MUTimeV1;

  /** ReleaseModelV1Admin */
  admin?: { approved?: boolean; archived?: boolean; added_by?: MUUserModelSearchV1 };
}

export interface MUReleaseModelSearchV1 {
  /** id */
  id?: number;

  /** title */
  title?: string;

  /** volume */
  volume?: string;

  /** chapter */
  chapter?: string;

  /** groups */
  groups?: { name?: string; group_id?: number }[];

  /** release_date */
  release_date?: string;
  time_added?: MUTimeV1;
}

export interface MUReleaseModelUpdateV1 {
  /** title */
  title?: string;

  /** volume */
  volume?: string;

  /** chapter */
  chapter?: string;

  /** groups */
  groups?: { name?: string }[];

  /** release_date */
  release_date?: string;

  /** download_notes */
  download_notes?: string;

  /** comment */
  comment?: string;
  time_added?: MUTimeUpdateV1;

  /** ReleaseModelUpdateV1Admin */
  admin?: { approved?: boolean; archived?: boolean };
}

export interface MUReleaseSearchRequestV1 {
  /** search */
  search?: string;

  /** search_type */
  search_type?: "series" | "regular";

  /** added_by */
  added_by?: number;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** letter */
  letter?: string;

  /** orderby */
  orderby?: "date" | "title" | "vol" | "chap";

  /** start_date */
  start_date?: string;

  /** end_date */
  end_date?: string;

  /** asc */
  asc?: "asc" | "desc";

  /** group_id */
  group_id?: number;

  /** pending */
  pending?: boolean;

  /** include_metadata */
  include_metadata?: boolean;
}

export interface MUReleaseDaysSearchRequestV1 {
  /** page */
  page?: number;

  /** perpage */
  perpage?: number;

  /** include_metadata */
  include_metadata?: boolean;
}

export interface MUReleaseModerateRequestV1 {
  /** archived */
  archived?: boolean;

  /** disable_paging */
  disable_paging?: boolean;

  /** page */
  page?: number;

  /** perpage */
  perpage?: number;
}

export interface MUReleaseSearchResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: {
    record?: MUReleaseModelSearchV1;
    metadata?: {
      series?: MUSeriesModelSearchV1;
      user_list?: MUListsSeriesModelV1;
      user_genre_highlights?: { genre?: string; color?: string }[];
      user_genre_filters?: string[];
      user_group_filters?: string[];
      type_filter?: string;
    };
  }[];
}

export interface MUReleaseModerateResponseV1 {
  /** total_hits */
  total_hits?: number;

  /** page */
  page?: number;

  /** per_page */
  per_page?: number;

  /** results */
  results?: { record?: MUReleaseModelV1; metadata?: { series?: number; like_releases?: MUReleaseModelV1[] } }[];

  /** group_info */
  group_info?: { group_id?: number; hold?: boolean }[];
}

export namespace Misc {
  /**
   * No description
   * @tags misc
   * @name Time
   * @summary get the current time
   * @request GET:/misc/time
   * @secure
   */
  export namespace Time {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUTimeV1;
  }
  /**
   * No description
   * @tags misc
   * @name ListOnlineUsers
   * @summary list online users
   * @request GET:/misc/online
   * @secure
   */
  export namespace ListOnlineUsers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUMiscOnlineUsersModelV1;
  }
  /**
   * No description
   * @tags misc
   * @name RetrieveSlowTransactionStatus
   * @summary get the status of a bulk transaction
   * @request GET:/misc/slow-transaction-status/{transaction_id}
   * @secure
   */
  export namespace RetrieveSlowTransactionStatus {
    export type RequestParams = { transactionId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUMiscSlowTransactionStatusResponseV1;
  }
  /**
   * No description
   * @tags misc
   * @name SiteStats
   * @summary show various site stats
   * @request GET:/misc/stats
   * @secure
   */
  export namespace SiteStats {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUMiscStatsModelV1;
  }
}

export namespace Genres {
  /**
   * No description
   * @tags genre
   * @name RetrieveGenres
   * @summary get genres
   * @request GET:/genres
   * @secure
   */
  export namespace RetrieveGenres {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUGenreModelStatsV1[];
  }
  /**
   * No description
   * @tags genre
   * @name AddGenre
   * @summary add a genre
   * @request POST:/genres
   * @secure
   */
  export namespace AddGenre {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUGenreModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags genre
   * @name RetrieveGenreById
   * @summary get genres
   * @request GET:/genres/{id}
   * @secure
   */
  export namespace RetrieveGenreById {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUGenreModelStatsV1;
  }
  /**
   * No description
   * @tags genre
   * @name DeleteGenre
   * @summary delete a genre
   * @request DELETE:/genres/{id}
   * @secure
   */
  export namespace DeleteGenre {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags genre
   * @name UpdateGenre
   * @summary update a genre
   * @request PATCH:/genres/{id}
   * @secure
   */
  export namespace UpdateGenre {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUGenreModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
}

export namespace Convo {
  /**
   * No description
   * @tags convo
   * @name SearchConvoPost
   * @summary search convo
   * @request POST:/convo/search
   * @secure
   */
  export namespace SearchConvoPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUConvoSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoSearchResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name KickUserFromConvo
   * @summary kick a user from a convo
   * @request POST:/convo/{id}/kick/{user_id}
   * @secure
   */
  export namespace KickUserFromConvo {
    export type RequestParams = { id: number; userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name IsUserIgnored
   * @summary return whether the user is ignored
   * @request GET:/convo/ignore/{user_id}
   * @secure
   */
  export namespace IsUserIgnored {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoUserIgnoreModelV1;
  }
  /**
   * No description
   * @tags convo
   * @name IgnoreUser
   * @summary ignore a user
   * @request POST:/convo/ignore/{user_id}
   * @secure
   */
  export namespace IgnoreUser {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name UnIgnoreUser
   * @summary remove ignore for a user
   * @request DELETE:/convo/ignore/{user_id}
   * @secure
   */
  export namespace UnIgnoreUser {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name RetrieveConvo
   * @summary get a specific convo
   * @request GET:/convo/{id}
   * @secure
   */
  export namespace RetrieveConvo {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoModelV1;
  }
  /**
   * No description
   * @tags convo
   * @name DeleteConvo
   * @summary delete a convo
   * @request DELETE:/convo/{id}
   * @secure
   */
  export namespace DeleteConvo {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name UpdateConvo
   * @summary update a convo
   * @request PATCH:/convo/{id}
   * @secure
   */
  export namespace UpdateConvo {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUConvoModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name AddConvo
   * @summary add an convo
   * @request POST:/convo
   * @secure
   */
  export namespace AddConvo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUConvoModelAddV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name JoinConvo
   * @summary join a convo
   * @request POST:/convo/{id}/join
   * @secure
   */
  export namespace JoinConvo {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name RetrieveConvoMessage
   * @summary get a specific convo message
   * @request GET:/convo/{id}/messages/{message_id}
   * @secure
   */
  export namespace RetrieveConvoMessage {
    export type RequestParams = { id: number; messageId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoMessageModelV1;
  }
  /**
   * No description
   * @tags convo
   * @name UpdateConvoMessage
   * @summary update a convo message
   * @request PATCH:/convo/{id}/messages/{message_id}
   * @secure
   */
  export namespace UpdateConvoMessage {
    export type RequestParams = { id: number; messageId: number };
    export type RequestQuery = {};
    export type RequestBody = MUConvoMessageModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name RetrieveConvoMessageLocation
   * @summary get a specific convo message location
   * @request GET:/convo/{id}/messages/{message_id}/location
   * @secure
   */
  export namespace RetrieveConvoMessageLocation {
    export type RequestParams = { id: number; messageId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name AddConvoMessage
   * @summary add a message to a convo
   * @request POST:/convo/{id}/messages
   * @secure
   */
  export namespace AddConvoMessage {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUConvoMessageModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name SearchConvoMessagesPost
   * @summary search convo
   * @request POST:/convo/{id}/messages/search
   * @secure
   */
  export namespace SearchConvoMessagesPost {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUConvoMessageSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoMessageSearchResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name InviteUserToConvo
   * @summary invite a user to a convo
   * @request POST:/convo/{id}/invite
   * @secure
   */
  export namespace InviteUserToConvo {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUConvoParticipantModelAddV1[];
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name AbandonConvoBulk
   * @summary abandon convos in bulk
   * @request POST:/convo/bulk/abandon
   * @secure
   */
  export namespace AbandonConvoBulk {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUConvoBulkModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name AbandonConvo
   * @summary abandon a convo
   * @request POST:/convo/{id}/abandon
   * @secure
   */
  export namespace AbandonConvo {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name RetrieveConvoParticipants
   * @summary get list of convo participants
   * @request GET:/convo/{id}/participants
   * @secure
   */
  export namespace RetrieveConvoParticipants {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoParticipantModelV1[];
  }
  /**
   * No description
   * @tags convo
   * @name DeleteConvoBulk
   * @summary delete convos in bulk
   * @request POST:/convo/bulk/delete
   * @secure
   */
  export namespace DeleteConvoBulk {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUConvoBulkModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name ConvoInbox
   * @summary display unread messages
   * @request GET:/convo/inbox
   * @secure
   */
  export namespace ConvoInbox {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoSearchResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name ConvoInboxCount
   * @summary retrieve number of unread messages
   * @request GET:/convo/inbox/count
   * @secure
   */
  export namespace ConvoInboxCount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoSearchResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name ConvoSent
   * @summary display sent messages
   * @request POST:/convo/sent
   * @secure
   */
  export namespace ConvoSent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUPerPageSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoSearchResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name ConvoReceived
   * @summary display received (and read) messages
   * @request POST:/convo/received
   * @secure
   */
  export namespace ConvoReceived {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUPerPageSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoSearchResponseV1;
  }
  /**
   * No description
   * @tags convo
   * @name ListConvoMessages
   * @summary list convo messages
   * @request POST:/convo/{id}/messages/list
   * @secure
   */
  export namespace ListConvoMessages {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUConvoMessageListRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUConvoMessageSearchResponseV1;
  }
}

export namespace Members {
  /**
   * No description
   * @tags members
   * @name AddMemberGenreFilter
   * @summary filter a genre for a user
   * @request POST:/members/{id}/genre/{genre_id}/filter
   * @secure
   */
  export namespace AddMemberGenreFilter {
    export type RequestParams = { id: number; genreId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RemoveMemberGenreFilter
   * @summary remove a filter for a genre for a user
   * @request DELETE:/members/{id}/genre/{genre_id}/filter
   * @secure
   */
  export namespace RemoveMemberGenreFilter {
    export type RequestParams = { id: number; genreId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMember
   * @summary get a specific members
   * @request GET:/members/{id}
   * @secure
   */
  export namespace RetrieveMember {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserModelV1;
  }
  /**
   * No description
   * @tags members
   * @name DeleteMember
   * @summary delete a member
   * @request DELETE:/members/{id}
   * @secure
   */
  export namespace DeleteMember {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name UpdateMember
   * @summary update a member
   * @request PATCH:/members/{id}
   * @secure
   */
  export namespace UpdateMember {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUUserModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name AddMemberAvatar
   * @summary add a new member avatar
   * @request POST:/members/{id}/avatar
   * @secure
   */
  export namespace AddMemberAvatar {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = { image?: File; title?: string };
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name DeleteMemberAvatar
   * @summary delete a member avatar
   * @request DELETE:/members/{id}/avatar/{avatar_id}
   * @secure
   */
  export namespace DeleteMemberAvatar {
    export type RequestParams = { id: number; avatarId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name ApproveMemberUpgrade
   * @summary upgrade a member
   * @request POST:/members/{id}/upgrade/approve
   * @secure
   */
  export namespace ApproveMemberUpgrade {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RejectMemberUpgrade
   * @summary reject a member upgrade
   * @request POST:/members/{id}/upgrade/reject
   * @secure
   */
  export namespace RejectMemberUpgrade {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMemberChangeRequest
   * @summary get change requests for a specific user
   * @request GET:/members/{id}/requests/{request_id}
   * @secure
   */
  export namespace RetrieveMemberChangeRequest {
    export type RequestParams = { id: number; requestId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserChangeRequestModelV1;
  }
  /**
   * No description
   * @tags members
   * @name DeleteMemberChangeRequest
   * @summary add a change request
   * @request DELETE:/members/{id}/requests/{request_id}
   * @secure
   */
  export namespace DeleteMemberChangeRequest {
    export type RequestParams = { id: number; requestId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name UpdateMemberChangeRequest
   * @summary update a change request
   * @request PATCH:/members/{id}/requests/{request_id}
   * @secure
   */
  export namespace UpdateMemberChangeRequest {
    export type RequestParams = { id: number; requestId: number };
    export type RequestQuery = {};
    export type RequestBody = MUUserChangeRequestModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name SearchMemberChangeRequests
   * @summary search change requests for a specific user
   * @request GET:/members/{id}/requests
   * @secure
   */
  export namespace SearchMemberChangeRequests {
    export type RequestParams = { id: number };
    export type RequestQuery = { page?: number; perpage?: number; orderby?: "score" | "time"; asc?: "asc" | "desc" };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserChangeRequestSearchResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name AddMemberChangeRequest
   * @summary add a change request
   * @request POST:/members/{id}/requests
   * @secure
   */
  export namespace AddMemberChangeRequest {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUUserChangeRequestModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name AddMember
   * @summary add a member
   * @request POST:/members
   * @secure
   */
  export namespace AddMember {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUUserModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMemberAvatars
   * @summary get avatars for a specific user
   * @request GET:/members/{id}/avatars
   * @secure
   */
  export namespace RetrieveMemberAvatars {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUAvatarModelV1[];
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMemberTopicSubscription
   * @summary get a subscription to a specific topic for a user
   * @request GET:/members/{id}/topics/{topic_id}
   * @secure
   */
  export namespace RetrieveMemberTopicSubscription {
    export type RequestParams = { id: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserSubscribedTopicModelV1;
  }
  /**
   * No description
   * @tags members
   * @name AddUserTopicSubscription
   * @summary add a topic subscription for a user
   * @request POST:/members/{id}/topics/{topic_id}
   * @secure
   */
  export namespace AddUserTopicSubscription {
    export type RequestParams = { id: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RemoveUserTopicSubscription
   * @summary remove a topic subscription for a user
   * @request DELETE:/members/{id}/topics/{topic_id}
   * @secure
   */
  export namespace RemoveUserTopicSubscription {
    export type RequestParams = { id: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMemberGroupFilters
   * @summary get group filters for a specific user
   * @request GET:/members/{id}/group/filters
   * @secure
   */
  export namespace RetrieveMemberGroupFilters {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserGroupFilterModelV1[];
  }
  /**
   * No description
   * @tags members
   * @name AddMemberGenreHighlight
   * @summary highlight a genre for a user
   * @request POST:/members/{id}/genre/{genre_id}/highlight
   * @secure
   */
  export namespace AddMemberGenreHighlight {
    export type RequestParams = { id: number; genreId: number };
    export type RequestQuery = {};
    export type RequestBody = MUUserGenreHighlightModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RemoveMemberGenreHighlight
   * @summary remove a highlight for a genre for a user
   * @request DELETE:/members/{id}/genre/{genre_id}/highlight
   * @secure
   */
  export namespace RemoveMemberGenreHighlight {
    export type RequestParams = { id: number; genreId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMemberGenreFilters
   * @summary get genre filters for a specific user
   * @request GET:/members/{id}/genre/filters
   * @secure
   */
  export namespace RetrieveMemberGenreFilters {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserGenreFilterModelV1[];
  }
  /**
   * No description
   * @tags members
   * @name ResetGenreSettings
   * @summary reset genre highlights and filters for a user
   * @request POST:/members/{id}/genre/reset
   * @secure
   */
  export namespace ResetGenreSettings {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name AddUserGroupFilter
   * @summary filter a group for a user
   * @request POST:/members/{id}/group/{group_id}/filter
   * @secure
   */
  export namespace AddUserGroupFilter {
    export type RequestParams = { id: number; groupId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RemoveUserGroupFilter
   * @summary remove a filter for a group for a user
   * @request DELETE:/members/{id}/group/{group_id}/filter
   * @secure
   */
  export namespace RemoveUserGroupFilter {
    export type RequestParams = { id: number; groupId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMemberTopicSubscriptions
   * @summary get topic subscriptions for a specific user
   * @request GET:/members/{id}/topics
   * @secure
   */
  export namespace RetrieveMemberTopicSubscriptions {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserSubscribedTopicModelV1[];
  }
  /**
   * No description
   * @tags members
   * @name RetrieveMemberGenreHighlights
   * @summary get highlights for a specific user
   * @request GET:/members/{id}/genre/highlights
   * @secure
   */
  export namespace RetrieveMemberGenreHighlights {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserGenreHighlightModelV1[];
  }
  /**
   * No description
   * @tags members
   * @name SearchMembersPost
   * @summary search members
   * @request POST:/members/search
   * @secure
   */
  export namespace SearchMembersPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUUserSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserSearchResponseV1;
  }
}

export namespace Aboutus {
  /**
   * No description
   * @tags aboutus
   * @name ReorderAboutus
   * @summary reorder aboutus
   * @request POST:/aboutus/reorder
   * @secure
   */
  export namespace ReorderAboutus {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUAboutusCategoryReorderModelV1[];
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name RetrieveAboutusCategory
   * @summary returns a single category
   * @request GET:/aboutus/category/{category_id}
   * @secure
   */
  export namespace RetrieveAboutusCategory {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUAboutusCategoryModelV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name DeleteAboutusCategory
   * @summary remove a category
   * @request DELETE:/aboutus/category/{category_id}
   * @secure
   */
  export namespace DeleteAboutusCategory {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name UpdateAboutusCategory
   * @summary update a category
   * @request PATCH:/aboutus/category/{category_id}
   * @secure
   */
  export namespace UpdateAboutusCategory {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = {};
    export type RequestBody = MUAboutusCategoryModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name AddAboutusCategory
   * @summary add a category
   * @request POST:/aboutus/category
   * @secure
   */
  export namespace AddAboutusCategory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUAboutusCategoryModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name AddAboutusCategoryUser
   * @summary add a user to a category
   * @request POST:/aboutus/category/{category_id}/users
   * @secure
   */
  export namespace AddAboutusCategoryUser {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = {};
    export type RequestBody = MUAboutusUserModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name RetrieveAboutusDescription
   * @summary returns description of site
   * @request GET:/aboutus
   * @secure
   */
  export namespace RetrieveAboutusDescription {
    export type RequestParams = {};
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUAboutusDescriptionModelV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name UpdateAboutusDescription
   * @summary update description of site
   * @request POST:/aboutus
   * @secure
   */
  export namespace UpdateAboutusDescription {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUAboutusDescriptionModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name DeleteAboutusCategoryUser
   * @summary remove a user from a category
   * @request DELETE:/aboutus/category/{category_id}/users/{entry_id}
   * @secure
   */
  export namespace DeleteAboutusCategoryUser {
    export type RequestParams = { categoryId: number; entryId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags aboutus
   * @name RetrieveAboutusCategoriesAndUsers
   * @summary returns categories and users
   * @request GET:/aboutus/users
   * @secure
   */
  export namespace RetrieveAboutusCategoriesAndUsers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUAboutusCategoryModelV1[];
  }
}

export namespace Account {
  /**
   * No description
   * @tags account
   * @name ConfirmDeleteAccount
   * @summary confirm deletion of your account
   * @request POST:/account/delete/confirm/{auth_hash}
   * @secure
   */
  export namespace ConfirmDeleteAccount {
    export type RequestParams = { authHash: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name DeleteAccount
   * @summary delete your account
   * @request POST:/account/delete/{captcha_response}
   * @secure
   */
  export namespace DeleteAccount {
    export type RequestParams = { captchaResponse: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name Login
   * @summary create a session token
   * @request PUT:/account/login
   * @secure
   */
  export namespace Login {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUAccountLoginModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name ConfirmAndChangePassword
   * @summary update a password change using an auth hash
   * @request POST:/account/forgotpass/confirm/{auth_hash}
   * @secure
   */
  export namespace ConfirmAndChangePassword {
    export type RequestParams = { authHash: string };
    export type RequestQuery = {};
    export type RequestBody = MUUserModelUpdatePasswordV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name ForgotPassword
   * @summary send a forgotten password email
   * @request POST:/account/forgotpass/{captcha_response}
   * @secure
   */
  export namespace ForgotPassword {
    export type RequestParams = { captchaResponse: string };
    export type RequestQuery = {};
    export type RequestBody = MUAccountForgotPassModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name Profile
   * @summary get the profile for the current user
   * @request GET:/account/profile
   * @secure
   */
  export namespace Profile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserModelV1;
  }
  /**
   * No description
   * @tags account
   * @name ResendAuthEmail
   * @summary send an auth email to a user
   * @request POST:/account/resendauth/{id}
   * @secure
   */
  export namespace ResendAuthEmail {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name SendForgotEmail
   * @summary send a forgotten password email to a user
   * @request POST:/account/sendforgot/{id}
   * @secure
   */
  export namespace SendForgotEmail {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name ConfirmRegistration
   * @summary confirm a new member registration
   * @request POST:/account/register/confirm/{auth_hash}
   * @secure
   */
  export namespace ConfirmRegistration {
    export type RequestParams = { authHash: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name RegisterMember
   * @summary register a new member
   * @request POST:/account/register/{captcha_response}
   * @secure
   */
  export namespace RegisterMember {
    export type RequestParams = { captchaResponse: string };
    export type RequestQuery = {};
    export type RequestBody = MUUserModelRegisterV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name Logout
   * @summary remove a session token
   * @request POST:/account/logout
   * @secure
   */
  export namespace Logout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags account
   * @name Captcha
   * @summary retrieve the public captcha key
   * @request GET:/account/captcha
   * @secure
   */
  export namespace Captcha {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
}

export namespace Membergroups {
  /**
   * No description
   * @tags members
   * @name RetrieveUserGroups
   * @summary get user groups
   * @request GET:/membergroups
   * @secure
   */
  export namespace RetrieveUserGroups {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserGroupModelV1[];
  }
  /**
   * No description
   * @tags members
   * @name RetrieveUserGroupById
   * @summary get user group
   * @request GET:/membergroups/{id}
   * @secure
   */
  export namespace RetrieveUserGroupById {
    export type RequestParams = { id: string };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUUserGroupModelV1;
  }
  /**
   * No description
   * @tags members
   * @name AddOrUpdateUserGroup
   * @summary add or update a user group
   * @request PUT:/membergroups/{id}
   * @secure
   */
  export namespace AddOrUpdateUserGroup {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = MUUserGroupModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags members
   * @name DeleteUserGroup
   * @summary delete a user group
   * @request DELETE:/membergroups/{id}
   * @secure
   */
  export namespace DeleteUserGroup {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
}

export namespace Groups {
  /**
   * No description
   * @tags groups
   * @name RetrieveGroup
   * @summary get a specific group
   * @request GET:/groups/{id}
   * @secure
   */
  export namespace RetrieveGroup {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUGroupsModelV1;
  }
  /**
   * No description
   * @tags groups
   * @name DeleteGroup
   * @summary delete a group
   * @request DELETE:/groups/{id}
   * @secure
   */
  export namespace DeleteGroup {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags groups
   * @name UpdateGroup
   * @summary update an group
   * @request PATCH:/groups/{id}
   * @secure
   */
  export namespace UpdateGroup {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUGroupsModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags groups
   * @name AddGroup
   * @summary add an group
   * @request POST:/groups
   * @secure
   */
  export namespace AddGroup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUGroupsModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags groups
   * @name RejectGroup
   * @summary reject and delete a group
   * @request POST:/groups/{id}/reject
   * @secure
   */
  export namespace RejectGroup {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags groups
   * @name RetrieveGroupSeries
   * @summary get the list of series and release frequency for a specific group
   * @request GET:/groups/{id}/series
   * @secure
   */
  export namespace RetrieveGroupSeries {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUGroupsSeriesListResponseV1;
  }
  /**
   * No description
   * @tags groups
   * @name SearchGroupsPost
   * @summary search groups
   * @request POST:/groups/search
   * @secure
   */
  export namespace SearchGroupsPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUGroupsSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUGroupsSearchResponseV1;
  }
}

export namespace Forums {
  /**
   * No description
   * @tags forum
   * @name RetrieveTopic
   * @summary retrieve a forum topic
   * @request GET:/forums/{forum_id}/topics/{topic_id}
   * @secure
   */
  export namespace RetrieveTopic {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumTopicModelV1;
  }
  /**
   * No description
   * @tags forum
   * @name AddPost
   * @summary add a forum post
   * @request POST:/forums/{forum_id}/topics/{topic_id}
   * @secure
   */
  export namespace AddPost {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumPostModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name DeleteTopic
   * @summary delete a topic
   * @request DELETE:/forums/{forum_id}/topics/{topic_id}
   * @secure
   */
  export namespace DeleteTopic {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name UpdateTopic
   * @summary update a forum topic
   * @request PATCH:/forums/{forum_id}/topics/{topic_id}
   * @secure
   */
  export namespace UpdateTopic {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumTopicModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ReportPost
   * @summary report a forum post
   * @request POST:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}/report
   * @secure
   */
  export namespace ReportPost {
    export type RequestParams = { forumId: number; topicId: number; postId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumPostReportModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name DeletePostReport
   * @summary delete a post report
   * @request DELETE:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}/report
   * @secure
   */
  export namespace DeletePostReport {
    export type RequestParams = { forumId: number; topicId: number; postId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name SearchSpecificTopicPost
   * @summary search specific topic
   * @request POST:/forums/{forum_id}/topics/{topic_id}/search
   * @secure
   */
  export namespace SearchSpecificTopicPost {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumSearchResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name RetrievePost
   * @summary retrieve a forum post
   * @request GET:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}
   * @secure
   */
  export namespace RetrievePost {
    export type RequestParams = { forumId: number; topicId: number; postId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumPostModelV1;
  }
  /**
   * No description
   * @tags forum
   * @name DeletePost
   * @summary delete a post
   * @request DELETE:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}
   * @secure
   */
  export namespace DeletePost {
    export type RequestParams = { forumId: number; topicId: number; postId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name UpdatePost
   * @summary update a forum post
   * @request PATCH:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}
   * @secure
   */
  export namespace UpdatePost {
    export type RequestParams = { forumId: number; topicId: number; postId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumPostModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name RetrievePostLocation
   * @summary retrieve a forum post location within topic
   * @request GET:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}/location
   * @secure
   */
  export namespace RetrievePostLocation {
    export type RequestParams = { forumId: number; topicId: number; postId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name AddForumAdmin
   * @summary add a forum admin
   * @request PUT:/forums/{forum_id}/admins/{user_id}
   * @secure
   */
  export namespace AddForumAdmin {
    export type RequestParams = { forumId: number; userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name RemoveForumAdmin
   * @summary remove a forum admin
   * @request DELETE:/forums/{forum_id}/admins/{user_id}
   * @secure
   */
  export namespace RemoveForumAdmin {
    export type RequestParams = { forumId: number; userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ListCategories
   * @summary show forum categories and forums
   * @request GET:/forums
   * @secure
   */
  export namespace ListCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumCategoryModelListV1[];
  }
  /**
   * No description
   * @tags forum
   * @name ListPopularForums
   * @summary show popular forums
   * @request GET:/forums/popular
   * @secure
   */
  export namespace ListPopularForums {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumForumModelListV1[];
  }
  /**
   * No description
   * @tags forum
   * @name LookupSeries
   * @summary lookup a series to find the forum id
   * @request GET:/forums/lookup/series/{series_id}
   * @secure
   */
  export namespace LookupSeries {
    export type RequestParams = { seriesId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumLookupResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name LookupTopic
   * @summary lookup a topic to find the forum id
   * @request GET:/forums/lookup/topic/{topic_id}
   * @secure
   */
  export namespace LookupTopic {
    export type RequestParams = { topicId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumLookupResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name LookupPost
   * @summary lookup a post to find the forum and topic id
   * @request GET:/forums/lookup/post/{post_id}
   * @secure
   */
  export namespace LookupPost {
    export type RequestParams = { postId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumLookupResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name GetCurrentWarnForUser
   * @summary gets the current warn status for user
   * @request GET:/forums/warn/{user_id}
   * @secure
   */
  export namespace GetCurrentWarnForUser {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumWarnModelV1;
  }
  /**
   * No description
   * @tags forum
   * @name UpdateUserWarnLevel
   * @summary update a user warn level
   * @request PUT:/forums/warn/{user_id}
   * @secure
   */
  export namespace UpdateUserWarnLevel {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumWarnModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ListReportedPosts
   * @summary show reported posts
   * @request GET:/forums/report
   * @secure
   */
  export namespace ListReportedPosts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumPostReportModelV1[];
  }
  /**
   * No description
   * @tags forum
   * @name ListWarnHistoryForUser
   * @summary show warn history for a user
   * @request GET:/forums/warn/{user_id}/history
   * @secure
   */
  export namespace ListWarnHistoryForUser {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumWarnModelV1[];
  }
  /**
   * No description
   * @tags forum
   * @name RetrieveTemporaryPollImages
   * @summary retrieve temporary poll images
   * @request GET:/forums/temp_poll_images
   * @secure
   */
  export namespace RetrieveTemporaryPollImages {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumPollTempImageModelV1[];
  }
  /**
   * No description
   * @tags forum
   * @name AddTemporaryPollImage
   * @summary add a temporary poll image
   * @request POST:/forums/temp_poll_images
   * @secure
   */
  export namespace AddTemporaryPollImage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { image?: File; caption?: string };
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name AddPollVote
   * @summary add a vote to a forum poll
   * @request POST:/forums/{forum_id}/topics/{topic_id}/poll/vote/{choice_id}
   * @secure
   */
  export namespace AddPollVote {
    export type RequestParams = { forumId: number; topicId: number; choiceId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name RetrieveVote
   * @summary retrieve my vote from the poll
   * @request GET:/forums/{forum_id}/topics/{topic_id}/poll/vote
   * @secure
   */
  export namespace RetrieveVote {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumPollVoteModelV1;
  }
  /**
   * No description
   * @tags forum
   * @name SearchSpecificForumPost
   * @summary search specific forum
   * @request POST:/forums/{forum_id}/search
   * @secure
   */
  export namespace SearchSpecificForumPost {
    export type RequestParams = { forumId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumSearchResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ListPosts
   * @summary list posts in topic
   * @request POST:/forums/{forum_id}/topics/{topic_id}/list
   * @secure
   */
  export namespace ListPosts {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = MUPerPageSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumPostListResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ListPostsByMe
   * @summary list posts in topic that I made
   * @request GET:/forums/{forum_id}/topics/{topic_id}/my_posts
   * @secure
   */
  export namespace ListPostsByMe {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumPostByUserResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name RetrieveForum
   * @summary retrieve a forum
   * @request GET:/forums/{forum_id}
   * @secure
   */
  export namespace RetrieveForum {
    export type RequestParams = { forumId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumForumModelV1;
  }
  /**
   * No description
   * @tags forum
   * @name AddTopic
   * @summary add a forum topic
   * @request POST:/forums/{forum_id}
   * @secure
   */
  export namespace AddTopic {
    export type RequestParams = { forumId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumTopicModelAddV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name SearchForumPost
   * @summary search forum
   * @request POST:/forums/search
   * @secure
   */
  export namespace SearchForumPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUForumSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumSearchResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ListTopics
   * @summary list topics
   * @request POST:/forums/{forum_id}/list
   * @secure
   */
  export namespace ListTopics {
    export type RequestParams = { forumId: number };
    export type RequestQuery = { with_first_post?: boolean };
    export type RequestBody = MUForumTopicListRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumTopicListResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ListGlobalTopics
   * @summary list global topics
   * @request GET:/forums/global
   * @secure
   */
  export namespace ListGlobalTopics {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumTopicListResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name UpdateTopicPoll
   * @summary update a forum topic poll (if present)
   * @request PATCH:/forums/{forum_id}/topics/{topic_id}/poll
   * @secure
   */
  export namespace UpdateTopicPoll {
    export type RequestParams = { forumId: number; topicId: number };
    export type RequestQuery = {};
    export type RequestBody = MUForumPollModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags forum
   * @name ShowLogPost
   * @summary show forum admin log
   * @request POST:/forums/log
   * @secure
   */
  export namespace ShowLogPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUForumAdminHistorySearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUForumAdminHistorySearchResponseV1;
  }
}

export namespace Series {
  /**
   * No description
   * @tags series
   * @name SearchSeriesCommentsPost
   * @summary search series comments
   * @request POST:/series/{id}/comments/search
   * @secure
   */
  export namespace SearchSeriesCommentsPost {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCommentSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesCommentSearchResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name CombineSeriesCategories
   * @summary combine two series categories
   * @request POST:/series/{id}/categories/combine
   * @secure
   */
  export namespace CombineSeriesCategories {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCategoryUpdateModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name AddSeriesCategoryVote
   * @summary add a vote for a category on a series
   * @request POST:/series/{id}/categories/vote
   * @secure
   */
  export namespace AddSeriesCategoryVote {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCategoryVoteModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RemoveSeriesCategoryVote
   * @summary remove series category vote for user
   * @request POST:/series/{id}/categories/vote/delete
   * @secure
   */
  export namespace RemoveSeriesCategoryVote {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCategoryVoteDeleteModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name LockSeriesField
   * @summary lock a field of an series
   * @request POST:/series/{id}/locks/{item}/lock
   * @secure
   */
  export namespace LockSeriesField {
    export type RequestParams = { id: number; item: string };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesLockModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name UnlockSeriesField
   * @summary unlock a field of an series
   * @request POST:/series/{id}/locks/{item}/unlock
   * @secure
   */
  export namespace UnlockSeriesField {
    export type RequestParams = { id: number; item: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name AddSeriesComment
   * @summary add a series comment
   * @request POST:/series/{id}/comments
   * @secure
   */
  export namespace AddSeriesComment {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCommentModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveUserSeriesRating
   * @summary get a specific series rating for a user
   * @request GET:/series/{id}/rating
   * @secure
   */
  export namespace RetrieveUserSeriesRating {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesRatingModelV1;
  }
  /**
   * No description
   * @tags series
   * @name UpdateUserSeriesRating
   * @summary update the user rating for a series
   * @request PUT:/series/{id}/rating
   * @secure
   */
  export namespace UpdateUserSeriesRating {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesRatingModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name DeleteUserSeriesRating
   * @summary delete a series rating for a user
   * @request DELETE:/series/{id}/rating
   * @secure
   */
  export namespace DeleteUserSeriesRating {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeries
   * @summary get a specific series
   * @request GET:/series/{id}
   * @secure
   */
  export namespace RetrieveSeries {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesModelV1;
  }
  /**
   * No description
   * @tags series
   * @name DeleteSeries
   * @summary delete a series
   * @request DELETE:/series/{id}
   * @secure
   */
  export namespace DeleteSeries {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name UpdateSeries
   * @summary update an series
   * @request PATCH:/series/{id}
   * @secure
   */
  export namespace UpdateSeries {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name AddSeriesCommentUsefulFlag
   * @summary set usefulness of a series comment
   * @request PUT:/series/{id}/comments/{comment_id}/useful
   * @secure
   */
  export namespace AddSeriesCommentUsefulFlag {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCommentUsefulModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RemoveSeriesCommentUsefulFlag
   * @summary remove usefulness of a series comment
   * @request DELETE:/series/{id}/comments/{comment_id}/useful
   * @secure
   */
  export namespace RemoveSeriesCommentUsefulFlag {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name SeriesReleaseRssFeed
   * @summary releases rss feed for a specific series
   * @request GET:/series/{id}/rss
   * @secure
   */
  export namespace SeriesReleaseRssFeed {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @tags series
   * @name SearchSeriesHistoryPost
   * @summary search series history
   * @request POST:/series/{id}/history
   * @secure
   */
  export namespace SearchSeriesHistoryPost {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUPerPageSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesHistorySearchResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeriesLocks
   * @summary get a specific series lock
   * @request GET:/series/{id}/locks
   * @secure
   */
  export namespace RetrieveSeriesLocks {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesLockModelV1[];
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeriesComment
   * @summary get a specific series comment
   * @request GET:/series/{id}/comments/{comment_id}
   * @secure
   */
  export namespace RetrieveSeriesComment {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesCommentModelV1;
  }
  /**
   * No description
   * @tags series
   * @name DeleteSeriesComment
   * @summary delete a series comment
   * @request DELETE:/series/{id}/comments/{comment_id}
   * @secure
   */
  export namespace DeleteSeriesComment {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name UpdateSeriesComment
   * @summary update a series comment
   * @request PATCH:/series/{id}/comments/{comment_id}
   * @secure
   */
  export namespace UpdateSeriesComment {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCommentModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeriesRatingRainbow
   * @summary get a the series rating rainbow
   * @request GET:/series/{id}/ratingrainbow
   * @secure
   */
  export namespace RetrieveSeriesRatingRainbow {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesRatingRainbowModelV1;
  }
  /**
   * No description
   * @tags series
   * @name SeriesCommentsModerationPost
   * @summary moderate series comments
   * @request POST:/series/comments/moderation
   * @secure
   */
  export namespace SeriesCommentsModerationPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCommentSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesCommentModerationResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RenameSeriesCategory
   * @summary renames a series category
   * @request POST:/series/{id}/categories/rename
   * @secure
   */
  export namespace RenameSeriesCategory {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCategoryUpdateModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveMySeriesComment
   * @summary get my series comment
   * @request GET:/series/{id}/comments/my_comment
   * @secure
   */
  export namespace RetrieveMySeriesComment {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesCommentModelV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeriesCommentLocation
   * @summary get a specific series comment location
   * @request GET:/series/{id}/comments/{comment_id}/location
   * @secure
   */
  export namespace RetrieveSeriesCommentLocation {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name DeleteSeriesCategory
   * @summary deletes a series category
   * @request POST:/series/{id}/categories/delete
   * @secure
   */
  export namespace DeleteSeriesCategory {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUCategoriesModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeriesGroups
   * @summary get the list of groups scanlating a specific series
   * @request GET:/series/{id}/groups
   * @secure
   */
  export namespace RetrieveSeriesGroups {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesGroupListResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeriesRankLocation
   * @summary get a specific series rank location
   * @request GET:/series/{id}/rank/{type}
   * @secure
   */
  export namespace RetrieveSeriesRankLocation {
    export type RequestParams = { id: number; type: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name AddSeries
   * @summary add an series
   * @request POST:/series
   * @secure
   */
  export namespace AddSeries {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUSeriesModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name UpdateSeriesImage
   * @summary update the image of an series
   * @request POST:/series/{id}/image
   * @secure
   */
  export namespace UpdateSeriesImage {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = { image?: File };
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name DeleteSeriesImage
   * @summary delete the image of an series
   * @request DELETE:/series/{id}/image
   * @secure
   */
  export namespace DeleteSeriesImage {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name SearchSeriesPost
   * @summary search series
   * @request POST:/series/search
   * @secure
   */
  export namespace SearchSeriesPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUSeriesSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesSearchResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name ReportSeriesComment
   * @summary report a series comment
   * @request POST:/series/{id}/comments/{comment_id}/report
   * @secure
   */
  export namespace ReportSeriesComment {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCommentReportModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags series
   * @name RetrieveSeriesCategoryVotes
   * @summary get category votes for the current user
   * @request GET:/series/{id}/categories/votes
   * @secure
   */
  export namespace RetrieveSeriesCategoryVotes {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUSeriesCategoryVoteModelV1[];
  }
}

export namespace Publishers {
  /**
   * No description
   * @tags publishers
   * @name RetrievePublisherSeries
   * @summary get the list of series for a specific publisher
   * @request GET:/publishers/{id}/series
   * @secure
   */
  export namespace RetrievePublisherSeries {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUPublishersSeriesListResponseV1;
  }
  /**
   * No description
   * @tags publishers
   * @name RetrievePublicationSeries
   * @summary get the list of series for a specific publication
   * @request GET:/publishers/publication
   * @secure
   */
  export namespace RetrievePublicationSeries {
    export type RequestParams = {};
    export type RequestQuery = { pubname: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUPublishersPublicationResponseV1;
  }
  /**
   * No description
   * @tags publishers
   * @name RetrievePublisher
   * @summary get a specific publisher
   * @request GET:/publishers/{id}
   * @secure
   */
  export namespace RetrievePublisher {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUPublishersModelV1;
  }
  /**
   * No description
   * @tags publishers
   * @name DeletePublisher
   * @summary delete a publisher
   * @request DELETE:/publishers/{id}
   * @secure
   */
  export namespace DeletePublisher {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags publishers
   * @name UpdatePublisher
   * @summary update a publisher
   * @request PATCH:/publishers/{id}
   * @secure
   */
  export namespace UpdatePublisher {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUPublishersModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags publishers
   * @name SearchPublishersPost
   * @summary search publishers
   * @request POST:/publishers/search
   * @secure
   */
  export namespace SearchPublishersPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUPublishersSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUPublishersSearchResponseV1;
  }
  /**
   * No description
   * @tags publishers
   * @name AddPublisher
   * @summary add an publisher
   * @request POST:/publishers
   * @secure
   */
  export namespace AddPublisher {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUPublishersModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
}

export namespace Poll {
  /**
   * No description
   * @tags poll
   * @name RetrieveVoteStatus
   * @summary get information about whether the user has voted
   * @request GET:/poll/vote/status
   * @secure
   */
  export namespace RetrieveVoteStatus {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUPollVoteStatusModelV1;
  }
  /**
   * No description
   * @tags poll
   * @name VotePollNoAnswer
   * @summary vote in a poll
   * @request POST:/poll/vote
   * @secure
   */
  export namespace VotePollNoAnswer {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags poll
   * @name VotePollAnswer
   * @summary vote in a poll answer
   * @request POST:/poll/vote/{answer_id}
   * @secure
   */
  export namespace VotePollAnswer {
    export type RequestParams = { answerId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags poll
   * @name RetrievePoll
   * @summary get the active poll
   * @request GET:/poll
   * @secure
   */
  export namespace RetrievePoll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUPollModelV1;
  }
  /**
   * No description
   * @tags poll
   * @name AddPoll
   * @summary add a new poll
   * @request POST:/poll
   * @secure
   */
  export namespace AddPoll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUPollModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags poll
   * @name ArchivePoll
   * @summary archive the active poll
   * @request DELETE:/poll
   * @secure
   */
  export namespace ArchivePoll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags poll
   * @name RetrieveOldPolls
   * @summary get old polls
   * @request GET:/poll/old
   * @secure
   */
  export namespace RetrieveOldPolls {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
}

export namespace Lists {
  /**
   * No description
   * @tags lists
   * @name RetrieveListById
   * @summary retrieve list metadata and options
   * @request GET:/lists/{id}
   * @secure
   */
  export namespace RetrieveListById {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsModelV1;
  }
  /**
   * No description
   * @tags lists
   * @name DeleteCustomList
   * @summary remove a custom list
   * @request DELETE:/lists/{id}
   * @secure
   */
  export namespace DeleteCustomList {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name UpdateList
   * @summary update a user list
   * @request PATCH:/lists/{id}
   * @secure
   */
  export namespace UpdateList {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUListsModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name RetrieveListSeries
   * @summary retrieve list series item
   * @request GET:/lists/series/{series_id}
   * @secure
   */
  export namespace RetrieveListSeries {
    export type RequestParams = { seriesId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsSeriesModelV1;
  }
  /**
   * No description
   * @tags lists
   * @name RetrieveLists
   * @summary retrieve list of user lists
   * @request GET:/lists
   * @secure
   */
  export namespace RetrieveLists {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsModelV1[];
  }
  /**
   * No description
   * @tags lists
   * @name AddCustomList
   * @summary add a custom user list
   * @request POST:/lists
   * @secure
   */
  export namespace AddCustomList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUListsModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name AddListSeries
   * @summary add a series to a list
   * @request POST:/lists/series
   * @secure
   */
  export namespace AddListSeries {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUListsSeriesModelUpdateV1[];
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags lists
   * @name AddListSeriesBulk
   * @summary add a list of series to a list
   * @request POST:/lists/{id}/series/bulk
   * @secure
   */
  export namespace AddListSeriesBulk {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUListsBulkAddModelV1[];
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name RetrievePublicLists
   * @summary retrieve list of user lists
   * @request GET:/lists/public/{user_id}
   * @secure
   */
  export namespace RetrievePublicLists {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsModelV1[];
  }
  /**
   * No description
   * @tags lists
   * @name RetrievePublicListStats
   * @summary retrieve stats for user public lists
   * @request GET:/lists/public/{user_id}/stats
   * @secure
   */
  export namespace RetrievePublicListStats {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsPublicStatsModelV1;
  }
  /**
   * No description
   * @tags lists
   * @name SearchPublicListsPost
   * @summary search lists
   * @request POST:/lists/public/{user_id}/search/{id}
   * @secure
   */
  export namespace SearchPublicListsPost {
    export type RequestParams = { userId: number; id: number };
    export type RequestQuery = {};
    export type RequestBody = MUListsSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsPublicSearchResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name RetrieveSimilarUsersBySeries
   * @summary retrieve users who have similar interests based on series
   * @request GET:/lists/similar/{list_name}/{series_id}
   * @secure
   */
  export namespace RetrieveSimilarUsersBySeries {
    export type RequestParams = { listName: "read" | "wish" | "complete" | "unfinished" | "hold"; seriesId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsSimilarUsersResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name UpdateListSeries
   * @summary update a series list item
   * @request POST:/lists/series/update
   * @secure
   */
  export namespace UpdateListSeries {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUListsSeriesModelUpdateV1[];
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name DeleteListSeries
   * @summary remove a series from a list
   * @request POST:/lists/series/delete
   * @secure
   */
  export namespace DeleteListSeries {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = number[];
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags lists
   * @name SearchListsPost
   * @summary search lists
   * @request POST:/lists/{id}/search
   * @secure
   */
  export namespace SearchListsPost {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUListsSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUListsSearchResponseV1;
  }
}

export namespace Reviews {
  /**
   * No description
   * @tags reviews
   * @name ReviewCommentsModerationPost
   * @summary moderate review comments
   * @request POST:/reviews/comments/moderation
   * @secure
   */
  export namespace ReviewCommentsModerationPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUReviewCommentSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUReviewCommentSearchResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name RetrieveReviewComment
   * @summary get a specific review comment
   * @request GET:/reviews/{id}/comments/{comment_id}
   * @secure
   */
  export namespace RetrieveReviewComment {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUReviewCommentModelV1;
  }
  /**
   * No description
   * @tags reviews
   * @name DeleteReviewComment
   * @summary delete a review comment
   * @request DELETE:/reviews/{id}/comments/{comment_id}
   * @secure
   */
  export namespace DeleteReviewComment {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name UpdateReviewComment
   * @summary update a review comment
   * @request PATCH:/reviews/{id}/comments/{comment_id}
   * @secure
   */
  export namespace UpdateReviewComment {
    export type RequestParams = { id: number; commentId: number };
    export type RequestQuery = {};
    export type RequestBody = MUReviewCommentModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name AddReview
   * @summary add a review
   * @request POST:/reviews
   * @secure
   */
  export namespace AddReview {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUReviewModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name SearchReviewCommentsPost
   * @summary search review comments
   * @request POST:/reviews/{id}/comments/search
   * @secure
   */
  export namespace SearchReviewCommentsPost {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUReviewCommentSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUReviewCommentSearchResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name RetrieveReview
   * @summary get a specific review
   * @request GET:/reviews/{id}
   * @secure
   */
  export namespace RetrieveReview {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUReviewModelV1;
  }
  /**
   * No description
   * @tags reviews
   * @name DeleteReview
   * @summary delete a review
   * @request DELETE:/reviews/{id}
   * @secure
   */
  export namespace DeleteReview {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name UpdateReview
   * @summary update a review
   * @request PATCH:/reviews/{id}
   * @secure
   */
  export namespace UpdateReview {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUReviewModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name SearchReviewsPost
   * @summary search reviews
   * @request POST:/reviews/search
   * @secure
   */
  export namespace SearchReviewsPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUReviewSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUReviewSearchResponseV1;
  }
  /**
   * No description
   * @tags reviews
   * @name AddReviewComment
   * @summary add a review comment
   * @request POST:/reviews/{id}/comments
   * @secure
   */
  export namespace AddReviewComment {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUReviewCommentModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
}

export namespace Authors {
  /**
   * No description
   * @tags authors
   * @name RetrieveAuthor
   * @summary get a specific author
   * @request GET:/authors/{id}
   * @secure
   */
  export namespace RetrieveAuthor {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUAuthorsModelV1;
  }
  /**
   * No description
   * @tags authors
   * @name DeleteAuthor
   * @summary delete an author
   * @request DELETE:/authors/{id}
   * @secure
   */
  export namespace DeleteAuthor {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name UpdateAuthor
   * @summary update an author
   * @request PATCH:/authors/{id}
   * @secure
   */
  export namespace UpdateAuthor {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUAuthorsModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name UpdateImage
   * @summary update the image of an author
   * @request POST:/authors/{id}/image
   * @secure
   */
  export namespace UpdateImage {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = { image?: File };
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name DeleteImage
   * @summary delete the image of an author
   * @request DELETE:/authors/{id}/image
   * @secure
   */
  export namespace DeleteImage {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name LockAuthorField
   * @summary lock a field of an author
   * @request POST:/authors/{id}/locks/{item}/lock
   * @secure
   */
  export namespace LockAuthorField {
    export type RequestParams = { id: number; item: string };
    export type RequestQuery = {};
    export type RequestBody = MUAuthorsLockModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name UnlockAuthorField
   * @summary unlock a field of an author
   * @request POST:/authors/{id}/locks/{item}/unlock
   * @secure
   */
  export namespace UnlockAuthorField {
    export type RequestParams = { id: number; item: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name RetrieveAuthorLocks
   * @summary get locks for a specific author
   * @request GET:/authors/{id}/locks
   * @secure
   */
  export namespace RetrieveAuthorLocks {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUAuthorsLockModelV1[];
  }
  /**
   * No description
   * @tags authors
   * @name AddAuthor
   * @summary add an author
   * @request POST:/authors
   * @secure
   */
  export namespace AddAuthor {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUAuthorsModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name SearchAuthorsPost
   * @summary search authors
   * @request POST:/authors/search
   * @secure
   */
  export namespace SearchAuthorsPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUAuthorsSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUAuthorsSearchResponseV1;
  }
  /**
   * No description
   * @tags authors
   * @name RetrieveAuthorSeries
   * @summary get the list of series for a specific author
   * @request POST:/authors/{id}/series
   * @secure
   */
  export namespace RetrieveAuthorSeries {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUAuthorsSeriesListRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUAuthorsSeriesListResponseV1;
  }
}

export namespace Categories {
  /**
   * No description
   * @tags categories
   * @name BulkCombineSeriesCategories
   * @summary combine two categories across the database
   * @request POST:/categories/bulk/combine
   * @secure
   */
  export namespace BulkCombineSeriesCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUSeriesCategoryUpdateModelV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags categories
   * @name BulkDeleteSeriesCategories
   * @summary delete a category across the database
   * @request POST:/categories/bulk/delete
   * @secure
   */
  export namespace BulkDeleteSeriesCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUCategoriesModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags categories
   * @name SearchCategoriesPost
   * @summary search categories
   * @request POST:/categories/search
   * @secure
   */
  export namespace SearchCategoriesPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUCategoriesSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUCategoriesSearchResponseV1;
  }
  /**
   * No description
   * @tags categories
   * @name FindCategoryByPrefix
   * @summary find a category by prefix
   * @request POST:/categories/findByPrefix
   * @secure
   */
  export namespace FindCategoryByPrefix {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUCategoriesModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUCategoriesModelV1[];
  }
  /**
   * No description
   * @tags categories
   * @name FindCategoryByExact
   * @summary find a category by name
   * @request POST:/categories/findByExact
   * @secure
   */
  export namespace FindCategoryByExact {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUCategoriesModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUCategoriesModelV1;
  }
}

export namespace Faq {
  /**
   * No description
   * @tags faq
   * @name RetrieveAllFaqCategoryQuestions
   * @summary retrieve all quesitons for a category
   * @request GET:/faq/{category_id}/questions
   * @secure
   */
  export namespace RetrieveAllFaqCategoryQuestions {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUFaqQuestionModelV1[];
  }
  /**
   * No description
   * @tags faq
   * @name AddFaqQuestion
   * @summary add a faq question
   * @request POST:/faq/{category_id}/questions
   * @secure
   */
  export namespace AddFaqQuestion {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = {};
    export type RequestBody = MUFaqQuestionModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags faq
   * @name RetrieveFaqQuestion
   * @summary get a specific question for a category
   * @request GET:/faq/{category_id}/questions/{question_id}
   * @secure
   */
  export namespace RetrieveFaqQuestion {
    export type RequestParams = { categoryId: number; questionId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUFaqQuestionModelV1;
  }
  /**
   * No description
   * @tags faq
   * @name DeleteFaqQuestion
   * @summary delete an faq
   * @request DELETE:/faq/{category_id}/questions/{question_id}
   * @secure
   */
  export namespace DeleteFaqQuestion {
    export type RequestParams = { categoryId: number; questionId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags faq
   * @name UpdateFaqQuestion
   * @summary update a faq question
   * @request PATCH:/faq/{category_id}/questions/{question_id}
   * @secure
   */
  export namespace UpdateFaqQuestion {
    export type RequestParams = { categoryId: number; questionId: number };
    export type RequestQuery = {};
    export type RequestBody = MUFaqQuestionModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags faq
   * @name RetrieveAllFaqCategoriesAndQuestions
   * @summary retrieve all categories and questions
   * @request GET:/faq
   * @secure
   */
  export namespace RetrieveAllFaqCategoriesAndQuestions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUFaqCategoryQuestionsModelV1[];
  }
  /**
   * No description
   * @tags faq
   * @name AddFaqCategory
   * @summary add a faq category
   * @request POST:/faq
   * @secure
   */
  export namespace AddFaqCategory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUFaqCategoryModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags faq
   * @name RetrieveFaqCategory
   * @summary get a specific category
   * @request GET:/faq/{category_id}
   * @secure
   */
  export namespace RetrieveFaqCategory {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUFaqCategoryModelV1;
  }
  /**
   * No description
   * @tags faq
   * @name DeleteFaqCategory
   * @summary delete a faq category
   * @request DELETE:/faq/{category_id}
   * @secure
   */
  export namespace DeleteFaqCategory {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags faq
   * @name UpdateFaqCategory
   * @summary update a faq category
   * @request PATCH:/faq/{category_id}
   * @secure
   */
  export namespace UpdateFaqCategory {
    export type RequestParams = { categoryId: number };
    export type RequestQuery = {};
    export type RequestBody = MUFaqCategoryModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags faq
   * @name ReorderFaq
   * @summary reorder faq
   * @request POST:/faq/reorder
   * @secure
   */
  export namespace ReorderFaq {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUFaqCategoryReorderModelV1[];
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
}

export namespace Releases {
  /**
   * No description
   * @tags releases
   * @name ModerateReleasesPost
   * @summary search releases to moderate
   * @request POST:/releases/moderate
   * @secure
   */
  export namespace ModerateReleasesPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUReleaseModerateRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUReleaseModerateResponseV1;
  }
  /**
   * No description
   * @tags releases
   * @name RetrieveRelease
   * @summary get a specific release
   * @request GET:/releases/{id}
   * @secure
   */
  export namespace RetrieveRelease {
    export type RequestParams = { id: number };
    export type RequestQuery = { unrenderedFields?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUReleaseModelV1;
  }
  /**
   * No description
   * @tags releases
   * @name DeleteRelease
   * @summary delete a release
   * @request DELETE:/releases/{id}
   * @secure
   */
  export namespace DeleteRelease {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags releases
   * @name UpdateRelease
   * @summary update an release
   * @request PATCH:/releases/{id}
   * @secure
   */
  export namespace UpdateRelease {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = MUReleaseModelUpdateV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags releases
   * @name ListReleasesByDay
   * @summary show releases by day
   * @request GET:/releases/days
   * @secure
   */
  export namespace ListReleasesByDay {
    export type RequestParams = {};
    export type RequestQuery = { page?: number; include_metadata?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MUReleaseSearchResponseV1;
  }
  /**
   * No description
   * @tags releases
   * @name SearchReleasesPost
   * @summary search releases
   * @request POST:/releases/search
   * @secure
   */
  export namespace SearchReleasesPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUReleaseSearchRequestV1;
    export type RequestHeaders = {};
    export type ResponseBody = MUReleaseSearchResponseV1;
  }
  /**
   * No description
   * @tags releases
   * @name AddRelease
   * @summary add an release
   * @request POST:/releases
   * @secure
   */
  export namespace AddRelease {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MUReleaseModelUpdateV1[];
    export type RequestHeaders = {};
    export type ResponseBody = MUApiResponseV1;
  }
  /**
   * No description
   * @tags releases
   * @name ReleaseRssFeed
   * @summary releases rss feed
   * @request GET:/releases/rss
   * @secure
   */
  export namespace ReleaseRssFeed {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}
