import {
  DEFAULT_PAGINATION_PAGE,
  DEFAULT_PAGINATION_LIMIT,
} from "../../../typescript/variables/system-config";
import { FlattenObject } from "../../../typescript/helpers/flatten-object.class";
import { TransformerUtil } from "../../../typescript/util/transformer.util";
import { configs } from "../../../typescript/util/configs.util";
import { SupportedLanguages } from "../../../typescript/@types/supported-languages";
import { inspect } from "util";
class BaseRepo {
  repo: any;
  constructor(repo: any) {
    this.repo = repo;
    this.repo = repo;
  }
  async findManyPaginated(
    _filter: { id: any },
    projection: any,
    options: { page: any; limit?: any }
  ) {
    const filter = TransformerUtil.stringKeyToRegex(
      FlattenObject.allProperties(_filter)
    );
    if (_filter.id) {
      console.log(inspect(_filter, false, null, true));
      return {
        entities: this._postHook(
          await this.repo.find(filter, projection, options).exec(),
          options
        ),
      };
    }
    const totalEntities = await this.repo.countDocuments(filter).exec();
    let { page, limit } = options;
    if (!page) {
      page = DEFAULT_PAGINATION_PAGE;
    }
    if (!limit) {
      limit = DEFAULT_PAGINATION_LIMIT;
    }
    const skip = page * limit - limit;
    const totalPages = Math.ceil(totalEntities / limit);
    const hasNext = page < totalPages;
    const nextPage = hasNext ? page + 1 : null;
    const hasPrevious = page > 1;
    const previousPage = hasPrevious ? page - 1 : null;
    delete options.page;
    const entities = await this.repo
      .find(
        filter,
        projection,
        Object.assign(Object.assign({}, options), { limit, skip })
      )
      .exec();
    return {
      entities: this._postHook(entities, options),
      info: {
        hasNext,
        nextPage,
        hasPrevious,
        previousPage,
        totalPages,
        currentPage: page,
        totalEntities,
        limit,
      },
    };
  }
  async findAll(filter: any, projection: any, options: any) {
    const entities = await this.repo.find(filter, projection, options).exec();
    return await this._postHook(entities, options);
  }
  async findOne(
    filter: any,
    projection: any,
    options: { custom: any } | null | undefined
  ) {
    const _filter = filter
      ? (options === null || options === void 0 ? void 0 : options.custom)
        ? filter
        : TransformerUtil.stringKeyToRegex(filter)
      : undefined;
    const foundedDoc = await this.repo
      .findOne(_filter, projection, options)
      .exec();
    return await this._postHook(foundedDoc, options);
  }
  async create(entity: any, options: any) {
    const createdDoc = await new this.repo(entity).save();
    return this._postHook(createdDoc, options);
  }
  async findOneAndUpdate(
    filter: any,
    update: any,
    options: { custom: any } | null | undefined
  ) {
    const updatedDoc = await this.repo
      .findOneAndUpdate(
        filter,
        (options === null || options === void 0 ? void 0 : options.custom)
          ? update
          : {
              $set: FlattenObject.excludeArray(update),
            },
        Object.assign(Object.assign({}, options), { new: true })
      )
      .exec();
    return this._postHook(updatedDoc, options);
  }
  async findOneAndRemove(filter: any, options: any) {
    const removedDoc = await this.repo.findOneAndRemove(filter, options).exec();
    return this._postHook(removedDoc, options);
  }
  async checkExistsCaseInsensitive(
    args: ArrayLike<unknown> | { [s: string]: unknown }
  ) {
    const query = {
      $or: Object.entries(args).reduce(
        (p: any, c, i) =>
          (p[i] = { [c[0]]: new RegExp(`^${c[1]}$`, "i") }) && p,
        []
      ),
    };
    return this.repo.findOne(query).lean().exec();
  }
  _preHook(options: any) {
    const lean =
      typeof (options === null || options === void 0
        ? void 0
        : options.lean) === "boolean"
        ? options.lean
        : true;
    options === null || options === void 0 ? true : delete options.lean;
    return { lean };
  }
  _postHook(docs: { lean: (arg0: any) => any }, options?: any) {
    const { lean } = this._preHook(options);
    if (docs) {
      if (this.repo.schema.methods.toObjectLocalizedOnly) {
        if (
          !(options === null || options === void 0
            ? void 0
            : options.language) ||
          !Object.keys(SupportedLanguages).includes(options.language)
        ) {
          options.language = configs.options.i18n.defaultLanguage;
        }
        return this.repo.schema.methods.toObjectLocalizedOnly(
          docs,
          (options === null || options === void 0
            ? void 0
            : options.language) || configs.options.i18n.defaultLanguage
        );
      }
      if (docs.lean) {
        return docs.lean(lean);
      }
    }
    return docs;
  }
}
const _BaseRepo = BaseRepo;
export { _BaseRepo as BaseRepo };
